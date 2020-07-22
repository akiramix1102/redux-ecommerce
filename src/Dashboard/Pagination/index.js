import React from 'react';
import {Link} from 'react-router-dom'

function Pagination ({productPerPage,totalProduct,paginate}) {
    const pageNumbers=[];
    for(var i=1;i<=Math.ceil(totalProduct/productPerPage);i++)
    {
        pageNumbers.push(i);
    }
    return (
            <ul className="pagination">
                {
                    pageNumbers.map(number=>{
                        return(
                            <li key={number} className="page-item">
                                <Link  className="page-link" onClick={()=>paginate(number)}>{number}</Link>
                            </li>
                        )
                    })
                }
            </ul>
    );
}

export default Pagination;