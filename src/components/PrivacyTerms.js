import React, { useState } from 'react';
import RadioButton from './Radiobutton';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const PrivacySection = ({ formData, handleChange }) => {
  const { t, i18n } = useTranslation("global"); // Initialize the useTranslation hook

  const [showDetails, setShowDetails] = useState(false);
  const [privacyOptions, setPrivacyOptions] = useState({
    usefulTips: null,
    tailorTypeform: null,
    enrichData: null
  });

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handlePrivacyOptionChange = (option, value) => {
    setPrivacyOptions({ ...privacyOptions, [option]: value });
  };

  return (
    <div className="mb-4">
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-normal font-sans">{t('privacySection.seeOptions')}</p>
          <button
            className="text-gray-600 focus:outline-none"
            onClick={toggleDetails}
          >
            <svg
              className={`w-4 h-4 transition-transform ${showDetails ? 'transform rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        {showDetails && (
          <div className="mt-2 text-sm font-normal font-sans">
            <div className="flex flex-col mb-2">
              <p className="mr-2">{t('privacySection.getUsefulTips')}</p>
              <div className='flex my-2 gap-4'>
              <div className="flex items-center">
                <RadioButton
                  value="yes"
                  checked={privacyOptions.usefulTips === 'yes'}
                  onChange={() => handlePrivacyOptionChange('usefulTips', 'yes')}
                />
                <span className="mx-2">{t('privacySection.yes')}</span>
              </div> 
              <div className="flex items-center">
                <RadioButton
                  value="no"
                  checked={privacyOptions.usefulTips === 'no'}
                  onChange={() => handlePrivacyOptionChange('usefulTips', 'no')}
                />
                <span className="mx-2">{t('privacySection.no')}</span>
              </div>
              </div>
            </div>
            <div className="flex flex-col  mb-2">
              <p className="mr-2">{t('privacySection.tailorTypeform')}</p>
              <div className='flex  my-2 gap-4'>
              <div className="flex items-center">
                <RadioButton
                  value="yes"
                  checked={privacyOptions.tailorTypeform === 'yes'}
                  onChange={() => handlePrivacyOptionChange('tailorTypeform', 'yes')}
                />
                <span className="mx-2">{t('privacySection.yes')}</span>
              </div>
              <div className="flex items-center">
                <RadioButton
                  value="no"
                  checked={privacyOptions.tailorTypeform === 'no'}
                  onChange={() => handlePrivacyOptionChange('tailorTypeform', 'no')}
                />
                <span className="mx-2">{t('privacySection.no')}</span>
              </div>
              </div>
            </div>
            <div className="flex flex-col  mb-2">
              <p className="mr-2">{t('privacySection.enrichData')}</p>
              <div className='flex  my-2 gap-4'>
              <div className="flex items-center">
                <RadioButton
                  value="yes"
                  checked={privacyOptions.enrichData === 'yes'}
                  onChange={() => handlePrivacyOptionChange('enrichData', 'yes')}
                />
                <span className="mx-2">{t('privacySection.yes')}</span>
              </div>
              <div className="flex items-center">
                <RadioButton
                  value="no"
                  checked={privacyOptions.enrichData === 'no'}
                  onChange={() => handlePrivacyOptionChange('enrichData', 'no')}
                />
                <span className="mx-2">{t('privacySection.no')}</span>
              </div>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              {t('privacySection.updatePreferences')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacySection;
