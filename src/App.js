import React, { useEffect, useState } from "react";

import FormHeader from "./FormHeader/FormHeader";
import Header from "./Header/Header";
import StudentsTable from "./StudentsTable/StudentsTable";
import NewStudentForm from "./Forms/NewStudentForm";
import DeleteStudents from "./Forms/DeleteStudent";
import EditInfoForm from "./Forms/EditInfoForm";

function App() {
  const [openCreateForm, setOpenCreateForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openDeleteForm, setOpenDeleteForm] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);
  const [studentsList, setStudentsList] = useState([]);

  const [imagesList, setImagesList] = useState([]);

  const [enableDelete, setEnableDelete] = useState(false);
  const [enableEdit, setEnableEdit] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const getStudents = async () => {
    setIsLoading(true);
    const getStudentsApi = await fetch(
      "http://localhost:8080/account/students"
    );
    const students = await getStudentsApi.json();

    setStudentsList(students.students);
    setIsLoading(false);
  };

  const getImages = async () => {
    setIsLoading(true);
    const getImagesApi = await fetch(
      "http://localhost:8080/account/images"
    );
    const images = await getImagesApi.json();

    setImagesList(images.images);
    setIsLoading(false);
  }

  useEffect(() => {
    getStudents();
    // getImages();
  }, []);

  const addStudentEntry = async (entry, imageEntry) => {
    const postStudentEntryApi = await fetch(
      "http://localhost:8080/account/students",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      }
    );
    setIsLoading(true);
    // imageUpload(imageEntry);
    getStudents();
    setIsLoading(false);
  };

  const imageUpload = async (entry) => {
    const formData = new FormData();
    formData.append("srNumber", entry.srNumber);
    formData.append("image", entry.image);
    const imageUploadApi = await fetch("http://localhost:8080/account/image-upload", {
      method: "POST",
      body: formData
    });
  }

  const updateStudentEntry = async (student, id) => {
    setIsLoading(true);
    const entry = { ...student, _id: id };
    const updateStudentEntryApi = await fetch(
      "http://localhost:8080/account/edit-student",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      }
    );
    getStudents();
    setIsLoading(false);
  };

  const deleteStudentEntry = async (student) => {
    setIsLoading(true);
    const deleteStudentEntryApi = await fetch(
      "http://localhost:8080/account/delete-student",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      }
    );
    getStudents();
    setIsLoading(false);
  };

  return (
    <div>
      <Header />
      <DeleteStudents
        setOpenDeleteForm={setOpenDeleteForm}
        open={openDeleteForm}
        selectedRow={selectedRow}
        data={studentsList}
        deleteStudentEntry={deleteStudentEntry}
      />
      <FormHeader
        setOpenCreateForm={setOpenCreateForm}
        setOpenEditForm={setOpenEditForm}
        setOpenDeleteForm={setOpenDeleteForm}
        enableDelete={enableDelete}
        enableEdit={enableEdit}
        selectedRow={selectedRow}
      />
      <NewStudentForm
        open={openCreateForm}
        setOpen={setOpenCreateForm}
        addStudentEntry={addStudentEntry}
      />
      <EditInfoForm
        open={openEditForm}
        setOpen={setOpenEditForm}
        data={studentsList}
        selectedRow={selectedRow}
        updateStudentEntry={updateStudentEntry}
      />
      <StudentsTable
        data={studentsList}
        isLoading={isLoading}
        setSelectedRow={setSelectedRow}
        setEnableDelete={setEnableDelete}
        setEnableEdit={setEnableEdit}
        imagesList={imagesList}
        setStudentsList={setStudentsList}
      />
    </div>
  );
}

export default App;
