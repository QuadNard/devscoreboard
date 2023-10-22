// useBlitzModeData.js

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';



const useBlitzModeData = (db) => {
  const [blitzModeData, setBlitzModeData] = useState([]);

  useEffect(() => {
    const blitzQuizCollection = collection(db, 'Blitz-Mode');

    const fetchBlitzQuiz = async () => {
      try {
        const data = await getDocs(blitzQuizCollection);
        const blitzQuiz = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setBlitzModeData(blitzQuiz);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlitzQuiz();
  }, [db]);

  return blitzModeData;
};

export default useBlitzModeData;
