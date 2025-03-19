import React from 'react'

const Addproduct = () => {
    const[noOfImages,setNoOfImages]=useState(new Array(1));
  return (
    <div>
      <form action="">
        <input type='text'  name={"title"} placeholder='Enter title.....' />
        <input type='text' name={"description"} placeholder='Enter product description....'/>
        <select name='' id='' onChange={(event)=>{
        comsole.log(event.target.value);
            setNoOfImages(new Array(parseInt(event.target.value)));
        }}>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
        <option value="">6</option>
        </select>
        <label htmlFor="">Add Images</label>
            {
                noOfImages.map((ele)=>{
                    <input type="file" accept='image/' />

                })
            }
      </form>
    </div>
  )
}

export default Addproduct
