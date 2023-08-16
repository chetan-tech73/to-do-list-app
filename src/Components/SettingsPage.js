import React, { useState } from 'react';

function SettingsPage() {
    const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(true);
    const [selectedTheme, setSelectedTheme] = useState('light');

    const handlePushNotificationsChange = () =>{
        setPushNotificationsEnabled(!
            pushNotificationsEnabled);
    };

    const handleThemeChange = (theme) => {
setSelectedTheme(theme);
    };
    return(
        <div>
            <h1>Settings</h1>
            <h2>App Preferences</h2>
            <label>
                <input
                type='checkbox'
                checked={pushNotificationsEnabled}
                onChange={handlePushNotificationsChange}
                />
                Enable Push Notifications
            </label>

            <h2>Theme Preferences</h2>
            <label>
                <input
                type='radio'
                value='light'
                checked={selectedTheme === 'light'}
                onChange={() => handleThemeChange('light')}
                />
                Light Theme
            </label>
            <label>
                <input
                type='radio'
                value='dark'
                checked={selectedTheme === 'dark'}
                onChange={() => 
                handleThemeChange('dark')}
                />
                Dark Theme
            </label>
        </div>
    );
}

export default SettingsPage;