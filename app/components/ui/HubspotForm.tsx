'use client';

import { useEffect, useRef, useState } from 'react';

interface HubspotFormProps {
  region?: string;
  portalId: string;
  formId: string;
}

export default function HubspotForm({ 
  region = 'eu1', 
  portalId, 
  formId 
}: HubspotFormProps) {
  const [hasError, setHasError] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formMovedRef = useRef(false);
  const scriptLoadedRef = useRef(false);
  const formCreateAttemptedRef = useRef(false);
  const observerRef = useRef<MutationObserver | null>(null);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const formFoundInDomRef = useRef(false);
  
  // Cleanup function for all resources
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Cleanup function for component unmount
    return () => {
      // Clear all timers and observers
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
        checkIntervalRef.current = null;
      }
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);
  
  // Function to safely scan for and move forms
  const scanAndMoveForm = () => {
    // Don't try to move the form if it's already been moved
    if (formMovedRef.current || !formContainerRef.current) {
      return false;
    }
    
    try {
      const hubspotForms = document.querySelectorAll('.hbspt-form');
      
      if (hubspotForms.length > 0) {
        console.log('Found HubSpot form, moving to container');
        
        // Clear the container first
        formContainerRef.current.innerHTML = '';
        
        // Move the form (last one is usually the most recent)
        const formToMove = hubspotForms[hubspotForms.length - 1];
        
        // Make sure the form exists and is not already in our container
        if (formToMove && !formContainerRef.current.contains(formToMove)) {
          // Clone the form instead of moving it to avoid DOM errors
          const formClone = formToMove.cloneNode(true) as HTMLElement;
          formContainerRef.current.appendChild(formClone);
          
          // Hide the original form
          (formToMove as HTMLElement).style.display = 'none';
          
          // Apply styling to the cloned form
          const formElement = formContainerRef.current.querySelector('form');
          if (formElement) {
            formElement.setAttribute('style', 'width: 100% !important; max-width: 100% !important;');
          }
          
          console.log('Form successfully moved and styled');
          formMovedRef.current = true;
          
          // Clean up resources since we've found and moved the form
          cleanupResources();
          
          return true;
        }
      }
    } catch (err) {
      console.error('Error moving HubSpot form:', err);
    }
    
    return false;
  };
  
  // Helper function to clean up resources when form is moved or on error
  const cleanupResources = () => {
    // Stop the mutation observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    
    // Clear the check interval
    if (checkIntervalRef.current) {
      clearInterval(checkIntervalRef.current);
      checkIntervalRef.current = null;
    }
    
    // Clear the timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  
  // Function to initialize form detection and creation
  const initializeForm = () => {
    if (formCreateAttemptedRef.current) return;
    formCreateAttemptedRef.current = true;
    
    console.log('Initializing HubSpot form detection');
    
    // First check if form already exists
    if (scanAndMoveForm()) {
      return; // Form already exists and was moved
    }
    
    // Set up mutation observer as backup detection method
    if (!observerRef.current) {
      observerRef.current = new MutationObserver(() => {
        if (!formMovedRef.current) {
          scanAndMoveForm();
        }
      });
      
      // Start observing the document body
      observerRef.current.observe(document.body, { 
        childList: true, 
        subtree: true 
      });
    }
    
    // Try to create the HubSpot form
    try {
      if (window.hbspt) {
        console.log('Creating HubSpot form with ID:', formId);
        
        // Create the form - it's likely to render at the bottom of the page
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          css: '',
          onFormReady: () => {
            console.log('HubSpot reports form is ready');
            
            // Give the form a moment to be added to the DOM
            setTimeout(scanAndMoveForm, 100);
          }
        });
        
        // Set up period checks to look for the form
        checkIntervalRef.current = setInterval(() => {
          if (formMovedRef.current) {
            if (checkIntervalRef.current) {
              clearInterval(checkIntervalRef.current);
              checkIntervalRef.current = null;
            }
          } else {
            scanAndMoveForm();
          }
        }, 1000);
        
        // Set a reasonable timeout to stop looking
        timeoutRef.current = setTimeout(() => {
          if (!formMovedRef.current) {
            console.log('Form search timeout reached, cleaning up');
            cleanupResources();
            
            // Check one last time if form exists in DOM
            const existingForms = document.querySelectorAll('.hbspt-form');
            formFoundInDomRef.current = existingForms.length > 0;
            
            // Only show error if no form found at all (not just not moved)
            if (!formFoundInDomRef.current) {
              setHasError(true);
            } else {
              // Form exists but wasn't moved - try one last time
              scanAndMoveForm();
            }
          }
        }, 15000);
      } else {
        console.error('HubSpot API not available');
        setHasError(true);
      }
    } catch (error) {
      console.error('Error initializing HubSpot form:', error);
      setHasError(true);
      cleanupResources();
    }
  };
  
  // Main effect to load script and initialize form
  useEffect(() => {
    if (typeof window === 'undefined' || scriptLoadedRef.current) return;
    
    // Function to load script
    const loadScript = () => {
      // Check if script is already loaded
      const existingScript = document.querySelector(`script[src*="hsforms.net/forms/embed/v2.js"]`);
      
      if (existingScript) {
        console.log('HubSpot forms script already exists');
        scriptLoadedRef.current = true;
        setTimeout(initializeForm, 500);
        return;
      }
      
      // Create and load script
      console.log('Loading HubSpot forms script');
      const script = document.createElement('script');
      script.src = `https://js-${region}.hsforms.net/forms/embed/v2.js`;
      script.async = true;
      
      script.onload = () => {
        console.log('HubSpot forms script loaded');
        scriptLoadedRef.current = true;
        setTimeout(initializeForm, 500);
      };
      
      script.onerror = () => {
        console.error('Failed to load HubSpot forms script');
        setHasError(true);
      };
      
      document.head.appendChild(script);
    };
    
    // Load the script
    loadScript();
    
  }, [region, formId, portalId]);
  
  return (
    <div className="relative bg-white p-3 rounded shadow-sm overflow-hidden">
      {/* Form container */}
      <div 
        ref={formContainerRef} 
        className="hubspot-form-container bg-white rounded overflow-hidden"
        style={{ minHeight: '350px' }}
      >
        <div className="flex items-center justify-center h-full p-6 text-center">
          <p className="text-gray-600">Loading contact form...</p>
        </div>
      </div>
      
      {/* Error state overlay */}
      {hasError && (
        <div className="absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center p-6">
          <div className="text-center">
            <p className="text-red-600 font-semibold mb-3">
              We're having trouble loading the contact form.
            </p>
            <p className="text-gray-700">
              Please contact us directly at{' '}
              <a 
                href="mailto:sales@alatargroup.co.uk"
                className="text-blue-600 hover:underline"
              >
                sales@alatargroup.co.uk
              </a>
            </p>
          </div>
        </div>
      )}
      
      {/* Global styling for HubSpot form */}
      <style jsx global>{`
        /* Container styles */
        .hubspot-form-container .hbspt-form {
          width: 100% !important;
          max-width: 100% !important;
        }
        
        /* Form element styles */
        .hubspot-form-container form {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
          font-family: inherit !important;
        }
        
        /* Input field styles */
        .hubspot-form-container .hs-input {
          width: 100% !important;
          max-width: 100% !important;
          padding: 0.5rem !important;
          border: 1px solid #d1d5db !important;
          border-radius: 0.25rem !important;
          font-size: inherit !important;
        }
        
        /* Label styles */
        .hubspot-form-container .hs-form-field > label {
          font-weight: 500 !important;
          margin-bottom: 0.25rem !important;
        }
        
        /* Field container */
        .hubspot-form-container .hs-form-field {
          margin-bottom: 1rem !important;
        }
        
        /* Error message styles */
        .hubspot-form-container .hs-error-msgs {
          color: #ef4444 !important;
          margin-top: 0.25rem !important;
          padding-left: 0 !important;
          list-style: none !important;
        }
        
        /* Button styles */
        .hubspot-form-container .hs-button {
          background-color: #2563eb !important;
          color: white !important;
          border: none !important;
          padding: 0.5rem 1rem !important;
          border-radius: 0.25rem !important;
          font-weight: 500 !important;
          cursor: pointer !important;
        }
        
        /* Button hover */
        .hubspot-form-container .hs-button:hover {
          background-color: #1d4ed8 !important;
        }
        
        /* Fix fieldset width */
        .hubspot-form-container fieldset {
          max-width: 100% !important;
        }
        
        /* Remove unnecessary margins */
        .hubspot-form-container .input {
          margin-right: 0 !important;
        }
      `}</style>
    </div>
  );
}
