"use client"
import ButtonComponent from '@/components/ButtonComponent'
import React, { useState ,useEffect, useCallback} from 'react'
import { Edit, PlusCircle, Trash } from 'react-feather'
import HeadingTitle from '../../_components/HeadingTitle'
import { Stack, Table ,Col,Row,Button} from 'react-bootstrap'
import { useDebounce } from 'use-debounce'
import { getProducts } from '../../_api/productsApi'
import { getTrimmedContent } from '@/common/utils/util'
import Image from 'next/image'
import CenteredModel from '@/components/CenterdModel'
import Link from 'next/link'
const Page = () => {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [debouncedSearchValue] = useDebounce(searchValue, 800);
    const [activeProduct, setActiveProduct] = useState<number | null>(null);
    
    const fetchData= useCallback((debouncedSearchValue?:string)=>{
        getProducts(debouncedSearchValue)
        .then((response:any)=>{
            setData(response.products);
        })
        .catch((error:any)=>{
        console.log(error)
        })
    },[])

    useEffect(() => {
        if (debouncedSearchValue !== "") {
          fetchData(debouncedSearchValue);
        }else{
            fetchData()
        }
      }, [debouncedSearchValue, fetchData]);

  
    function handleDelete(index: number): void {
        throw new Error('Function not implemented.')
    }

 

    function handleSubmit(event: any): void {
        throw new Error('Function not implemented.')
    }

  return (
  <div>
    <div className="d-flex align-items-center justify-content-between">
      <HeadingTitle title="Product List" />

    <ButtonComponent Icon={<PlusCircle size="20"/>} tooltip="Add product" type="button" label='Add Product' href='/' />
    </div>
    <Row className="d-flex justify-content-between align-items-center">
        <Col className="d-flex align-items-center" xs={6} md={6} lg={6} xl={6}>
          <span className="pe-2 mt-1">Filter</span>
        </Col>
        <Col xs={6} sm={4} md={4} lg={3} xl={3}>
          <form onSubmit={handleSubmit}>
            <Stack direction="horizontal">
              <input
                className="form-control"
                placeholder="Search product"
                type="search"
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
            </Stack>
          </form>
        </Col>
      </Row>
    {data.length === 0 ? (
      <p className="text-center">No results found</p>
    ) : (
      <Table borderless striped responsive hover className="mt-2">
        <thead>
          <tr>
            <th>sn</th>
            <th>title</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({id,title,description,price,brand,thumbnail,category}) => (
            <tr key={id}>
              <td>{id}</td>
              <td className='fw-bold cursor-pointer' ><Link href={`/admin/products/${id}/`}> {title}</Link></td>
              <td  className="cursor-pointer" onClick={()=>{setActiveProduct(id)}}>{<img src={thumbnail} alt='product' width={60}/>}</td>
              <td>{getTrimmedContent(description,20)}</td>
              <td>NRs.{price}</td>
              <td>{brand}</td>
              <td>{category}</td>

              <td>
              <ButtonComponent Icon={<Edit/>} tooltip="Edit" type="icon"  href={`/admin/products/${id}/edit`}/>
              <ButtonComponent Icon={<Trash/>} tooltip="Delete" type="icon" onClick={()=>handleDelete(id)} />
              {
                activeProduct === id &&
                <CenteredModel show={activeProduct === id} onHide={()=>{setActiveProduct(null)}}>
                  {<img src={thumbnail} alt='product'/>}
                </CenteredModel>
              }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </div>
  )
}

export default Page