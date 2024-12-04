
import {getFirestore, collection, addDoc, deleteDoc, doc, updateDoc,db } from "./firebase.js";
const db = getFirestore(app);
const postsCollection = collection(db, "posts");

document.getElementById("addPost").addEventListener("click", async function () {
  const title = document.getElementById("post-title").value.trim();
  const description = document.getElementById("postdescrib").value.trim();
  const postsContainer = document.getElementById("posts");

  if (title === "" || description === "") {
    alert("Please fill out both fields!");
    return;
  }

  try {
   
    const docRef = await addDoc(postsCollection, { title, description });
    console.log("Post added with ID: ", docRef.id);

    // Create a new post card
    const postCard = document.createElement("div");
    postCard.className = "card mb-4";
    postCard.dataset.id = docRef.id; // Store Firestore document ID in the card
    postCard.innerHTML = `
      <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <div class="d-flex justify-content-end gap-3">
              <button class="btn btn-sm btn-primary edit-post">Edit</button>
              <button class="btn btn-sm btn-danger delete-post">Delete</button>
          </div>
      </div>
    `;

    // Append the new post to the posts container
    postsContainer.prepend(postCard);

    // Clear the form inputs
    document.getElementById("post-title").value = "";
    document.getElementById("postdescrib").value = "";

    // Add event listener to the delete button
    const deleteBtn = postCard.querySelector(".delete-post");
    deleteBtn.addEventListener("click", async function () {
      const postId = postCard.dataset.id;
      await deleteDoc(doc(db, "posts", postId)); // Delete post from Firestore
      postCard.remove();
    });

    // Add event listener to the edit button
    const editBtn = postCard.querySelector(".edit-post");
    editBtn.addEventListener("click", async function () {
      // Populate the form with the existing values
      document.getElementById("post-title").value = postCard.querySelector(".card-title").innerText;
      document.getElementById("postdescrib").value = postCard.querySelector(".card-text").innerText;

      // Remove the existing post card
      const postId = postCard.dataset.id;
      await deleteDoc(doc(db, "posts", postId)); // Optionally delete old post
      postCard.remove();
    });
  } catch (error) {
    console.error("Error adding post: ", error);
  }
});
