'use client';

import React, { useState } from 'react';

const SportsSelection: React.FC = () => {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const sportsCategories: string[] = [
    'Football',
    'Basketball',
    'Volleyball',
    'Golf',
    'Squash',
    'Tennis',
    'Boxing',
    'Yoga',
    'Pilates',
  ];

  const handleCheckboxChange = (sport: string) => {
    setSelectedSports((prevSelected) =>
      prevSelected.includes(sport)
        ? prevSelected.filter((s) => s !== sport)
        : [...prevSelected, sport],
    );
  };

  const handleRoleChange = (role: string) => {
    setSelectedRoles((prevSelected) =>
      prevSelected.includes(role)
        ? prevSelected.filter((r) => r !== role)
        : [...prevSelected, role],
    );
  };

  return (
    <>
      <div>
        <form>
          <input
            id="first-name"
            name="first-name"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
          />
          <input
            id="last-name"
            name="last-name"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
          />
          <input type="number" id="age" name="age" placeholder="Age" />
          <h3>Select Your Role:</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <label>Owner</label>
            <input
              type="checkbox"
              value="Owner"
              checked={selectedRoles.includes('Owner')}
              onChange={() => handleRoleChange('Owner')}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <label>Player</label>
            <input
              type="checkbox"
              value="Player"
              checked={selectedRoles.includes('Player')}
              onChange={() => handleRoleChange('Player')}
            />
          </div>
        </form>
        <h3>Select Sports Interests:</h3>
        {sportsCategories.map((sport) => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label key={sport}> {sport}</label>
            <input
              type="checkbox"
              value={sport}
              checked={selectedSports.includes(sport)}
              onChange={() => handleCheckboxChange(sport)}
              style={{ marginTop: '-17px' }}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '-10px',
          paddingBottom: '10px',
        }}
      >
        <button>Update Profile</button>
      </div>
    </>
  );
};

export default SportsSelection;
