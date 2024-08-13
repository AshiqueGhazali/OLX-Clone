import React, { useState } from 'react'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import './AddProduct.css'
import { useNavigate } from 'react-router-dom'
// firebaseeee
import { storage , firestore} from '../../firebase/setup';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { userAuth } from '../../context/AuthContext'; // Custom hook for authentication context

const AddProduct = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)

    const navigate = useNavigate()
    const { currentUser } = userAuth(); // Get the currentUser from the AuthContext
    const date = new Date()

    const handleSubmit = async()=>{
        // e.preventDefault(); // Prevent default form submission

        if (!currentUser) {
          alert("Please log in to add a product.");
          return;
        }
    
        // Upload image to Firebase Storage
        let imageUrl = '';
        if (image) {
          const imageRef = ref(storage, `images/${image.name}`);
          await uploadBytes(imageRef, image);
          imageUrl = await getDownloadURL(imageRef);
        }
    
        // Save product details to Firestore
        try {
          await addDoc(collection(firestore, 'products'), {
            title,
            category,
            price,
            description,
            imageUrl,
            userId: currentUser.uid,
            userName: currentUser.displayName || 'Anonymous',
            createdAt:date.toDateString()
          });
          navigate('/'); 
        } catch (error) {
          console.error("Error adding document: ", error);
        }
    }
  return (
    <div>
        <div className='nav-of'>
            <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}} className='w-12 h-12 cursor-pointer ml-12'/>
        </div>
        <div className='flex justify-center'>
            <h1  className='font-bold text-2xl mt-3 text-[#002f34]'>POST YOUR AD</h1>
        </div>
        <div className='mt-5'>
            <div className="max-w-xl mx-auto border border-gray-300 dark:border-gray-600 p-5">
            <div className="mb-5">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Ad title</label>
                <input type="text" id="title" name='title' 
                    onChange={(e)=>{setTitle(e.target.value)}} value={title}
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                required />
            </div>
            <div className="mb-5">
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                <input type="text" id="category" name='category'
                    onChange={(e)=>{setCategory(e.target.value)}} value={category}
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-5">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900  border border-e-0 border-gray-300 rounded-s-md  dark:text-gray-400 dark:border-gray-600">
                    <p>₹</p>
                    </span>
                    <input type="number" id="price" name='price'
                        onChange={(e)=>{setPrice(e.target.value)}} value={price}
                        className="rounded-none rounded-e-lg  border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
              </div>
            <div className="mb-5">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                <input type="text" id="description" name='description'
                    onChange={(e)=>{setDescription(e.target.value)}} value={description}
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="flex items-center justify-center w-full overflow-hidden">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer   dark:border-gray-600 dark:hover:border-gray-500 ">
                    { image !== null ? <img src={URL.createObjectURL(image)} alt="" /> :
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    }
                    <input id="dropzone-file" onChange={(e)=>{setImage(e.target.files[0])}} type="file" className="hidden" />
                </label>
            </div> 
            <button onClick={handleSubmit}  className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
            </div>

        </div>
        {/* </div> */}
    </div>
  )
}

export default AddProduct