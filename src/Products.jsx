
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Products() {
  const [products,setUsers] = useState([])
  const [isLoaidng,setLoading] = useState(false)
  // const [isLoading,setLoading] = useState[false]
  useEffect(()=>{
  loadData();
  },[])
  let loadData = async()=>{
    setLoading(true)
    let users = await axios.get("https://62e0d51698dd9c9df6177ef5.mockapi.io/books")
    setUsers(users.data)
    setLoading(false)

  }
  return (
    <div id="layoutSidenav_content">
    <main>
            <div>
        {
          isLoaidng ? <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
          </div>
        </div>:<table class="table table-bordered text-center my-5">
  <thead className="bg-danger">
    <th className="text-light">Id</th>
    <th className="text-light">Title</th>
    <th className="text-light">Author</th>
    <th className="text-light">Year</th>
    <th className="text-light">₹ Price</th>
    <th className="text-light">Buy</th>

  </thead>
  <tbody id="thead">
      {products.map((products,index)=>{
        return(
          <tr>
          <td>{products.id}</td>
          <td>{products.Book}</td>
          <td>{products.Author}</td>
          <td>{products.Year}</td>
          <td> ₹{products.Price}</td>
          <td><button className="btn btn-primary mx-1"><Link to={`/products/${products.id}`} className="text-light book"><i class="fa-solid fa-book"></i>  Get A Book</Link></button>
      </td>
    </tr>
        )
      })}
  </tbody>
</table>
        }
</div>
    </main>
    <footer class="py-4 bg-light mt-auto">
        <div class="container-fluid px-4">
            <div class="d-flex align-items-center justify-content-between small">
                <div class="text-muted">Copyright &copy; Your Website 2022</div>
                <div>
                    <a href="#">Privacy Policy</a>
                    &middot;
                    <a href="#">Terms &amp; Conditions</a>
                </div>
            </div>
        </div>
    </footer>
</div>

    )

}

export default Products;
