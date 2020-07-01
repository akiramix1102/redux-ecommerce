import React from 'react';
import {Link} from 'react-router-dom'

function Pagination ({productPerPage,totalProduct,paginate}) {
    const pageNumbers=[];
    for(var i=1;i<=Math.ceil(totalProduct/productPerPage);i++)
    {
        pageNumbers.push(i);
    }
    return (
            <ul className="pagination justify-content-center">
                {
                    pageNumbers.map(number=>{
                        return(
                            <li key={number} className="page-item">
                                <Link to="#" className="page-link" onClick={()=>paginate(number)}>{number}</Link>
                            </li>
                        )
                    })
                }
            </ul>
    );
}

export default Pagination;