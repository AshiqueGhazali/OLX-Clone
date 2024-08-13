import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Menubar from './Menubar/Menubar'
import Home from './Home'
import Footer from './Footer/Footer'

import { firestore } from '../firebase/setup'; // Import Firestore
import { collection, getDocs } from 'firebase/firestore';

const Main = () => {
    const [product, setProduct] = useState([])
    

    useEffect(() => {
      const fetchProducts = async () => {
          try {
              // Reference to the 'products' collection
              const productsCollection = collection(firestore, 'products');
              // Fetch all documents in the 'products' collection
              const productsSnapshot = await getDocs(productsCollection);
              // Map over the documents to extract data
              const productsList = productsSnapshot.docs.map(doc => ({
                  id: doc.id, // Include document ID if needed
                  ...doc.data(), // Spread the document data
              }));
              setProduct(productsList); // Set the fetched products to state
          } catch (error) {
              console.error("Error fetching products: ", error);
          }
      };

      fetchProducts();
  }, []);


  return (
    <div>
        <Navbar/>
        <Menubar/>
        <Home products={product}/>
        <Footer/>
    </div>
  )
}

export default Main