
const Student = (props) => {
    return (
      <div className='container p-4'>
        <div className='row'>Students Enrolled</div>
        <div className='row border'>
          <div className='col-2'>
            <img src={props.headShot}
            className='w-100 py-2'
            alt=""></img>
          </div>
          <div className='col-8'>
            {props.name}<br/>
            Programming Experience: {props.experience} years
          </div>
          <div className="col-2">{props.children}</div>
        </div>
      </div>
    )
  }

  export default Student;