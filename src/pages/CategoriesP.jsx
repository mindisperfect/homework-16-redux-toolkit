import { useState } from "react";
// import CategoryCard from "../components/card/CategoryCard";
import CategorySearchForm from "../components/form/CategorySearchForm";
import {
  useAddCategoryMutation,
  // useDeleteCategoryMutation,
  useGetCategoriesQuery,
  // useUpdateCategoryMutation,
} from "../redux/services/categoryServices";
import ModalForm from "../components/modal/ModalForm";
import CategoryForm from "../components/form/CategoryForm";
import { Link } from "react-router-dom";
import axios from "axios";

const CategoriesP = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const [category, setCategory] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    avatar: "",
  });

  const {
    data: categories,
    isLoading,
    refetch,
  } = useGetCategoriesQuery({ search });
  const [addData] = useAddCategoryMutation();
  // const [updateData] = useUpdateCategoryMutation();
  // const [deleteData] = useDeleteCategoryMutation();

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const submit = async (values) => {
    try {
      if (selected) {
        await axios.put(`https://640b68ce81d8a32198e3826b.mockapi.io/api/v1/teacher/${selected}`, values);
      } else {
        await addData(values);  
      }
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  const CategorySearchFormProps = {
    search,
    setSearch,
    openModal,
  };

  const editCategory = async (id) => {
    setShow(true);
    await axios.get(`https://640b68ce81d8a32198e3826b.mockapi.io/api/v1/teacher/${id}`)
    setSelected(id)
    
  };
  const deleteCategory = async (id) => {
    let check = confirm("Are you sure you want to delete this teacher ?");
    if (check) {
      await axios.delete(`https://640b68ce81d8a32198e3826b.mockapi.io/api/v1/teacher/${id}`);
      refetch();
    }
  };

  return (
    <section>
      <div className="container">
        <CategorySearchForm {...CategorySearchFormProps} />
        {isLoading ? (
          "...Loading"
        ) : (
          <div className="row">
            {categories?.map(
              ({ avatar, firstName, id, lastName, phoneNumber }) => (
                <div key={id} className="col-md-6 col-lg-4 col-xl-3">
                  <div className="card mb-3">
                    <img height={300} src={avatar} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{firstName}</h5>
                      <h5 className="card-title">{lastName}</h5>
                      <p>{phoneNumber}</p>

                      <button
                        className="btn btn-success me-2 mb-2"
                        onClick={() => editCategory(id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger mb-2"
                        onClick={() => deleteCategory(id)}
                      >
                        Delete
                      </button>

                      <div className="btnsss">
                        <Link
                          to={`/categories/${id}`}
                          className="btn btn-primary"
                        >
                          Go products {id}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
      <ModalForm
        values={category}
        show={show}
        submit={submit}
        closeModal={closeModal}
      >
        <CategoryForm />
      </ModalForm>
    </section>
  );
};

export default CategoriesP;
