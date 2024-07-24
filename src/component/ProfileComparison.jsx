import React, { useMemo } from 'react';

const ProfileComparison = ({ profiles }) => {
  const renderComparison = (field) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {profiles.map((profile, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">{profile.name}</h3>
            <p className="text-gray-600">{profile[field]}</p>
          </div>
        ))}
      </div>
    );
  };

  const scoredProfiles = useMemo(() => {
    return profiles
      .map((profile) => {
        const experienceScore = parseFloat(profile.experience);
        const skillsScore = profile.skills.length;
        const score = experienceScore + skillsScore;

        return {
          ...profile,
          score,
        };
      })
      .sort((a, b) => b.score - a.score);
  }, [profiles]);

  const getRecommendationColor = (index) => {
    if (index === 0) return 'bg-green-200';
    if (index === 1) return 'bg-yellow-200';
    if (index === 2) return 'bg-orange-200';
    if (index === 3) return 'bg-red-200';
    return 'bg-white';
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">
        Profile Comparison
      </h2>

      <div className="mb-6 p-4 bg-blue-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">
          Recommendation System
        </h3>
        <p className="text-blue-700 mb-2">
          Profiles are ranked based on experience (years) and number of skills.
          Colors indicate recommendation level:
        </p>
        <ul className="list-disc list-inside">
          <li className="text-green-700">
            Green: Highly Recommended (Best Match)
          </li>
          <li className="text-yellow-400">Yellow: Recommended</li>
          <li className="text-orange-700">Orange: Potentially Suitable</li>
          <li className="text-red-300">
            Red: Potential Match (Review if needed)
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-indigo-600">Job Role</h3>
      {renderComparison('jobRole')}

      <h3 className="text-xl font-semibold mb-2 text-indigo-600">Experience</h3>
      {renderComparison('experience')}

      <h3 className="text-xl font-semibold mb-2 text-indigo-600">Education</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {profiles.map((profile, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">{profile.name}</h3>
            <ul className="list-disc list-inside">
              {profile.educations.map((edu, eduIndex) => (
                <li key={eduIndex} className="text-gray-600">
                  {edu.degree} - {edu.college}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-2 text-indigo-600">
        Skills and Recommendations
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {scoredProfiles.map((profile, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow ${getRecommendationColor(index)}`}
          >
            <h3 className="font-semibold text-lg mb-2">{profile.name}</h3>
            <p className="text-gray-600 mb-2">
              Experience: {profile.experience} years
            </p>
            <p className="text-gray-600 mb-2">
              Skills: {profile.skills.length}
            </p>
            {/* <p className="text-gray-600 mb-2">
              Score: {profile.score.toFixed(2)}
            </p> */}
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileComparison;
