import React,{useState , useEffect} from 'react';
import './Demoform.css';
import { Link } from 'react-router-dom';


const Demoform = () => {

  const initialvalues = {firstname : "" , lastname : "" , email : "" , phonenumber : "" , comapnyname : "" , websiteurl : "" , employeenumber : ""};
  const [formvalue, setformvalue] = useState(initialvalues);
  const [formerrors, setformerrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleonchange = (e) => {
    const {name, value} = e.target;
    setformvalue({...formvalue, [name] : value});
    console.log(formvalue);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    setformerrors(validate(formvalue));
    setisSubmit(true);
  }

  useEffect(() => {
    console.log(formerrors);
    if(Object.keys(formerrors).length === 0 && isSubmit)
    {
      console.log(formvalue);
    }
  }, [formerrors]);

  const validate = (values) => {
    const errors = {};

    if(!values.firstname)
    {
      errors.firstname = "Field is required";
    }
    if(!values.lastname)
    {
      errors.lastname = "Field is required";
    }
    if(!values.phonenumber)
    {
      errors.phonenumber = "Field is required";
    }
    if(!values.email)
    {
      errors.email = "Field is required";
    }
    if(!values.comapnyname)
    {
      errors.comapnyname = "Field is required";
    }
    if(!values.websiteurl)
    {
      errors.websiteurl = "Field is required";
    }
    if(!values.employeenumber)
    {
      errors.employeenumber = "Field is required";
    }

    return errors;
  }

  return (
    <div className='demoformmain'>
   <div className='demoform'>
    <div className='demoformheading'>
    <h3 className='demoheading'>Get a Free Demo of HubSpot's CRM Platform</h3>
    </div>

    {Object.keys(formerrors).length === 0 && isSubmit ? (<div> Registered successfully</div>) : ("")}
    <div className='formdetails'>
      <form onClick={handlesubmit}>
      <div className='formdetailstop'>
    <div className='formdetailsleft'>

      <div className='namediv'>
      <p className='texttag'>First Name *</p>
      <input className='inputtag' name='firstname' type="text" value={formvalue.firstname} onChange={handleonchange} />
      <p className='fieldreq'>{formerrors.firstname}</p>
      </div>
     

      <div className='namediv'>
      <p className='texttag'>Email *</p>
      <input className='inputtag' name='email' type="email" value={formvalue.email} onChange={handleonchange}/>
      <p className='fieldreq'>{formerrors.email}</p>
      </div>

      <div className='namediv'>
      <p className='texttag'>Company Name *</p>
      <input className='inputtag' name='comapnyname' type="text" value={formvalue.comapnyname} onChange={handleonchange}/>
      <p className='fieldreq'>{formerrors.comapnyname}</p>
      </div>

    </div>
    <div className='formdetailsright'>

    <div className='namediv'>
      <p className='texttag'>Last Name *</p>
      <input className='inputtag' name='lastname' type="text" value={formvalue.lastname} onChange={handleonchange}/>
      <p className='fieldreq'>{formerrors.lastname}</p>
      </div>

      <div className='namediv'>
      <p className='texttag'>Phone Number *</p>
      <input className='inputtag' name='phonenumber' type="number" value={formvalue.phonenumber} onChange={handleonchange} />
      <p className='fieldreq'>{formerrors.phonenumber}</p>
      </div>

      <div className='namediv'>
      <p className='texttag'>Website URL *</p>
      <input className='inputtag' name='websiteurl' type="text" value={formvalue.websiteurl} onChange={handleonchange}/>
      <p className='fieldreq'>{formerrors.websiteurl}</p>
      </div>

    </div>
    </div>

    <div className='demopagemiddlediv'>
    <div className='namediv'>
      <p className='texttag'>How many employees work there?*</p>
      <input className='inputtag' name='employeenumber' type="number" value={formvalue.employeenumber} onChange={handleonchange}/>
      <p className='fieldreq'>{formerrors.employeenumber}</p>
      </div>
    </div>

    <div className='demopagebottomdiv'>
      <p>We're committed to your privacy. HubSpot uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p>
    </div>

    <div className='getfreedemodiv'>
      <button className='btnform'> <Link className='linkfont' to="/Demosuccesspage" >Get Your Free Demo </Link></button>
    </div>
    </form>
    </div>
   </div>
   </div>
  )
}

export default Demoform;