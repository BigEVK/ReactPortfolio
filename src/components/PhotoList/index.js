import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Landing Page',
      category: 'RunBuddy',
      description:
        'Simply fill out the form and one of our experienced trainers will contact you'
    },
    {
      name: 'What We Do',
      category: 'RunBuddy',
      description:
        'We will help you reach tour goals with all the support you need'
    },
    {
      name: 'What You Do Steps 1 and 2',
      category: 'RunBuddy',
      description:
        'Easy steps for you to follow'
    },
    {
      name: 'What You Do Steps 3 and 4',
      category: 'RunBuddy',
      description:
        'Get running and see the results'
    },
    {
      name: 'Reach Out',
      category: 'RunBuddy',
      description:
        'Easily reach out to us and get your journey started'
    },
    {
      name: 'My Expense Tracker',
      category: 'MoneyTracker',
      description:
        'Easily track your expenses in one place'
    },
    {
      name: 'Add New Expense',
      category: 'MoneyTracker',
      description:
        'Add or remove expenses from one place and keep your expenses in check'
    },
    {
      name: 'Stock Ticker',
      category: 'MoneyTracker',
      description:
        'Follow your favorite stocks'
    },
    {
      name: 'Stock Ticker',
      category: 'MoneyTracker',
      description:
        'Follow your favorite stocks'
    },
    {
      name: 'Landing Page',
      category: 'ArtGarage',
      description:
        'Our site helps bring both Artists and Buyers together in one place'
    },
    {
      name: 'Featured Artist',
      category: 'ArtGarage',
      description:
        'Artists can feature their work on their own page, allowing potential buyers to peruse their work'
    },
    {
      name: 'Artist Page',
      category: 'ArtGarage',
      description:
        'With the Artists dedicated pages, potential buyers can rate and make comments'
    },
    {
      name: 'Post a Comment',
      category: 'ArtGarage',
      description:
        'Each potential buyer can rate the art anc comment on what they like about'
    },
    {
      name: 'Artis Page with Comments',
      category: 'ArtGarage',
      description:
        'Comments and ratings are added to the artists page'
    },
    {
      name: 'Regex Tutorial',
      category: 'regex',
      description:
        'This tutorial walks you through how to use regex to verify components of an email address'
    },
    {
      name: 'Regex Tutorial',
      category: 'regex',
      description:
        'With the proper sequence of characters you can specify which charccters are required and in what section'
    },
    {
      name: 'Regex Tutorial',
      category: 'regex',
      description:
        'Further breakdown of the regex expression'
    },
    {
      name: 'Regex Tutorial',
      category: 'regex',
      description:
        'Table of Contents and Regex Components'
    },
    {
      name: 'Regex Tutorial',
      category: 'regex',
      description:
        'More Regex Components'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
