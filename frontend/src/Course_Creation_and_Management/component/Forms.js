// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import axios from "axios";

// function Forms() {
//   // State variables for input values
//   const [courseID, setCourseID] = useState("");
//   const [courseName, setCourseName] = useState("");
//   const [description, setDescription] = useState("");
//   const [duration, setDuration] = useState("");
//   const [courseImage, setCourseImage] = useState(null); // Use null to represent the selected file
//   const [price, setPrice] = useState("");
//   const [lectureName, setLectureName] = useState("");
//   const [category, setCategory] = useState("");

//   // State variables for input validation errors
//   const [courseIDError, setCourseIDError] = useState("");
//   const [courseNameError, setCourseNameError] = useState("");
//   const [descriptionError, setDescriptionError] = useState("");
//   const [durationError, setDurationError] = useState("");
//   const [courseImageError, setCourseImageError] = useState("");
//   const [priceError, setPriceError] = useState("");
//   const [lectureNameError, setLectureNameError] = useState("");
//   const [categoryError, setCategoryError] = useState("");

//   // State variable for image preview
//   const [imagePreview, setImagePreview] = useState(null);

//   // Function to reset form and clear input values
//   const resetForm = () => {
//     setCourseID("");
//     setCourseName("");
//     setDescription("");
//     setDuration("");
//     setCourseImage(null); // Reset the file input
//     setPrice("");
//     setLectureName("");
//     setCategory("");

//     // Clear validation errors
//     setCourseIDError("");
//     setCourseNameError("");
//     setDescriptionError("");
//     setDurationError("");
//     setCourseImageError("");
//     setPriceError("");
//     setLectureNameError("");
//     setCategoryError("");

//     // Clear image preview
//     setImagePreview(null);
//   };

//   // Function to handle file input change and update image preview
//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];

//     if (selectedImage) {
//       // Read the selected image file and set it as the image preview
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setImagePreview(event.target.result);
//       };
//       reader.readAsDataURL(selectedImage);
//     } else {
//       setImagePreview(null);
//     }

//     // Update the courseImage state with the selected file
//     setCourseImage(selectedImage);
//   };

//   // Function to handle form submission
//   const sendData = (e) => {
//     e.preventDefault();

//     // Validate input fields
//     if (!courseID) {
//       setCourseIDError("Course ID is required");
//       return;
//     } else if (!/^[A-Za-z]{2}\d{4}$/.test(courseID)) {
//       setCourseIDError("Course ID must be 2 letters followed by 4 numbers");
//       return;
//     } else {
//       setCourseIDError("");
//     }

//     if (!courseName) {
//       setCourseNameError("Course Name is required");
//       return;
//     } else {
//       setCourseNameError("");
//     }

//     if (!description) {
//       setDescriptionError("Description is required");
//       return;
//     } else {
//       setDescriptionError("");
//     }

//     if (!duration) {
//       setDurationError("Duration is required");
//       return;
//     } else {
//       setDurationError("");
//     }

//     if (!courseImage) {
//       setCourseImageError("Course Image is required");
//       return;
//     } else {
//       setCourseImageError("");
//     }

//     if (!price) {
//       setPriceError("Price is required");
//       return;
//     } else {
//       setPriceError("");
//     }

//     if (!lectureName) {
//       setLectureNameError("Lecture Name is required");
//       return;
//     } else {
//       setLectureNameError("");
//     }

//     if (!category) {
//       setCategoryError("Category is required");
//       return;
//     } else {
//       setCategoryError("");
//     }

//     // All fields are valid, send data to the server
//     const formData = new FormData();
//     formData.append("courseID", courseID);
//     formData.append("courseName", courseName);
//     formData.append("description", description);
//     formData.append("duration", duration);
//     formData.append("courseImage", courseImage);
//     formData.append("price", price);
//     formData.append("lectureName", lectureName);
//     formData.append("category", category);

//     axios
//       .post(
//         "http://localhost:8050/Course_Creation_and_Management/course/add",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       )
//       .then(() => {
//         alert("Course Added");
//         resetForm();
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   return (
//     <div className="container">
//       <h1>Create Course</h1>

//       <Form onSubmit={sendData}>
//         <Form.Group className="mb-3" controlId="formBasicCourseID">
//           <Form.Label>Course ID</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Course ID (2 letters followed by 4 numbers)"
//             value={courseID}
//             onChange={(e) => setCourseID(e.target.value)}
//             isInvalid={!!courseIDError}
//           />
//           <Form.Control.Feedback type="invalid">
//             {courseIDError}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicCourseName">
//           <Form.Label>Course Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Course Name"
//             value={courseName}
//             onChange={(e) => setCourseName(e.target.value)}
//             isInvalid={!!courseNameError}
//           />
//           <Form.Control.Feedback type="invalid">
//             {courseNameError}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicDescription">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             isInvalid={!!descriptionError}
//           />
//           <Form.Control.Feedback type="invalid">
//             {descriptionError}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicDuration">
//           <Form.Label>Duration</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Duration"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//             isInvalid={!!durationError}
//           />
//           <Form.Control.Feedback type="invalid">
//             {durationError}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicCourseImage">
//           <Form.Label>Course Image</Form.Label>
//           <Form.Control
//             type="file"
//             accept="image/*" // Accept only image files
//             onChange={handleImageChange}
//             isInvalid={!!courseImageError}
//           />
//           <Form.Control.Feedback type="invalid">
//             {courseImageError}
//           </Form.Control.Feedback>
//           {imagePreview && (
//             <img
//               src={imagePreview}
//               alt="Course Preview"
//               style={{ marginTop: "10px", maxWidth: "100px" }}
//             />
//           )}
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPrice">
//           <Form.Label>Price</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             isInvalid={!!priceError}
//           />
//           <Form.Control.Feedback type="invalid">{priceError}</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicLectureName">
//           <Form.Label>Lecture Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Lecture Name"
//             value={lectureName}
//             onChange={(e) => setLectureName(e.target.value)}
//             isInvalid={!!lectureNameError}
//           />
//           <Form.Control.Feedback type="invalid">
//             {lectureNameError}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicCategory">
//           <Form.Label>Category</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             isInvalid={!!categoryError}
//           />
//           <Form.Control.Feedback type="invalid">
//             {categoryError}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Button variant="outline-primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// }

// export default Forms;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Forms.css";

function Forms() {
  const [formData, setFormData] = useState({
    courseID: "",
    courseName: "",
    description: "",
    duration: "",
    courseImage: null,
    price: "",
    lectureName: "",
    category: "",
  });

  const [formErrors, setFormErrors] = useState({
    courseID: "",
    courseName: "",
    duration: "",
    courseImage: "",
    price: "",
    lectureName: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setFormData({
      ...formData,
      courseImage: selectedImage,
    });

    if (!selectedImage) {
      document.getElementById("image-preview").src = "";
    }

    validateField("courseImage", selectedImage);
  };

  const resetForm = () => {
    setFormData({
      courseID: "",
      courseName: "",
      description: "",
      duration: "",
      courseImage: null,
      price: "",
      lectureName: "",
      category: "",
    });

    setFormErrors({
      courseID: "",
      courseName: "",
      duration: "",
      courseImage: "",
      price: "",
      lectureName: "",
      category: "",
    });
  };

  const sendData = (e) => {
    e.preventDefault();

    let isValid = true;

    for (const key in formData) {
      if (key !== "courseImage") {
        validateField(key, formData[key]);
      }
    }

    for (const key in formErrors) {
      if (formErrors[key]) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      const formDataToSend = new FormData();
      formDataToSend.append("courseID", formData.courseID);
      formDataToSend.append("courseName", formData.courseName);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("duration", formData.duration);
      formDataToSend.append("courseImage", formData.courseImage);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("lectureName", formData.lectureName);
      formDataToSend.append("category", formData.category);

      axios
        .post(
          `http://localhost:8050/Course_Creation_and_Management/course/add`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          alert("Course Added");
          resetForm();
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  
  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "courseID":
        if (!value) {
          error = "Course ID is required";
        } else if (!/^[A-Za-z]{2}\d{4}$/.test(value)) {
          error = "Course ID must be 2 letters followed by 4 numbers";
        }
        break;
      case "courseName":
        if (!value) {
          error = "Course Name is required";
        }
        break;
      case "duration":
        if (!value) {
          error = "Duration is required";
        }
        break;
      case "courseImage":
        if (!value) {
          error = "Course Image is required";
        }
        break;
      case "price":
        if (!value) {
          error = "Price is required";
        } else if (!/^\$[0-9]+$/.test(value)) {
          error = "Price must start with a dollar sign ('$') and contain only numbers";
        }
        break;
      case "lectureName":
        if (!value) {
          error = "Lecture Name is required";
        }
        break;
      case "category":
        if (!value) {
          error = "Category is required";
        }
        break;
      default:
        break;
    }

    setFormErrors({
      ...formErrors,
      [fieldName]: error,
    });
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "bullet" }],
      ["bold", "italic", "underline", "color"],
      ["link"],
      [{ align: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ background: [] }],
      [{ color: [] }],
    ],
  };

  const formats = [
    "header",
    "font",
    "list",
    "bold",
    "italic",
    "underline",
    "color",
    "link",
    "align",
    "size",
    "background",
    "color",
  ];

  return (
    <div className="container">
      <h1>Create Course</h1>

      <Form onSubmit={sendData}>
        <Form.Group className="mb-3" controlId="formBasicCourseID">
          <Form.Label className="label-bold label-large">Course ID</Form.Label>
          <Form.Control
            type="text"
            name="courseID"
            placeholder="Enter Course ID (2 letters followed by 4 numbers)"
            value={formData.courseID}
            onChange={handleInputChange}
            isInvalid={!!formErrors.courseID}
            style={{ width: "400px" }}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.courseID}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCourseName">
          <Form.Label className="label-bold label-large">Course Name</Form.Label>
          <Form.Control
            type="text"
            name="courseName"
            placeholder="Enter Course Name"
            value={formData.courseName}
            onChange={handleInputChange}
            isInvalid={!!formErrors.courseName}
            style={{ width: "800px" }}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.courseName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-7" controlId="formBasicDescription">
          <Form.Label className="label-bold label-large">
            <b>Description</b>
          </Form.Label>
          <ReactQuill
            value={formData.description}
            onChange={(value) => setFormData({ ...formData, description: value })}
            modules={modules}
            formats={formats}
            style={{ height: "400px" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDuration">
          <Form.Label className="label-bold label-large">
            Duration (Hours:Minutes)
          </Form.Label>
          <div className="duration-input">
            <Form.Control
              type="number"
              name="duration"
              placeholder="Hours:Minutes"
              value={formData.duration}
              onChange={handleInputChange}
              min="0"
              style={{ width: "200px" }}
            />
          </div>
          {formErrors.duration && (
            <div className="invalid-feedback">{formErrors.duration}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCourseImage">
          <Form.Label className="label-bold label-large">Course Image</Form.Label>
          <Form.Control
            type="file"
            name="courseImage"
            accept="image/*"
            onChange={handleImageChange}
            isInvalid={!!formErrors.courseImage}
            style={{ width: "400px" }}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.courseImage}
          </Form.Control.Feedback>

          {formData.courseImage && (
            <img
              src={URL.createObjectURL(formData.courseImage)}
              alt="Course Preview"
              id="image-preview"
              style={{ marginTop: "10px", maxWidth: "25%" }}
            />
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label className="label-bold label-large">Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            placeholder="Enter Price (e.g., $50)"
            value={formData.price}
            onChange={handleInputChange}
            isInvalid={!!formErrors.price}
            style={{ width: "180px" }}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.price}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLectureName">
          <Form.Label className="label-bold label-large">Lecture Name</Form.Label>
          <Form.Control
            type="text"
            name="lectureName"
            placeholder="Enter Lecture Name"
            value={formData.lectureName}
            onChange={handleInputChange}
            isInvalid={!!formErrors.lectureName}
            style={{ width: "600px" }}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.lectureName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label className="label-bold label-large">Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            placeholder="Enter Category"
            value={formData.category}
            onChange={handleInputChange}
            isInvalid={!!formErrors.category}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.category}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Forms;











