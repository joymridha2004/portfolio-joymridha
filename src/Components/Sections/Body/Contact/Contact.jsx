import React, { useContext, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsArrowRightShort } from "react-icons/bs";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Thankyou from './Thankyou';
import Error from './Error';
import Loading from './Loading';
import { DataContext } from '../../../../App'; 
import { InlineWidget } from "react-calendly";
function Contact() {
    const { color } = useContext(DataContext); 
    const [loading, setIsLoading] = useState(false)
    const [thankyou, setthankyou] = useState(false)
    const [error, seterror] = useState(false)
    const [contactOpen, setContactOpen] = useState(1);

    function contact(){
      setContactOpen(1);
    }
    function chat(){
      setContactOpen(2);
    }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });   
    
      const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        // Validate input fields as they are changed
        if (name === 'name') {
          if (value.trim() === '') {
            setErrors({ ...errors, name: 'Name is required' });
          } else {
            setErrors({ ...errors, name: '' });
          }
        } else if (name === 'email') {
          if (!/\S+@\S+\.\S+/.test(value)) {
            setErrors({ ...errors, email: 'Invalid email address' });
          } else {
            setErrors({ ...errors, email: '' });
          }
        } else if (name === 'message') {
          if (value.trim() === '') {
            setErrors({ ...errors, message: 'Message is required' });
          } else {
            setErrors({ ...errors, message: '' });
          }
        }
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        const Service_ID = 'service_s2ad65n';
        const Template_ID = 'template_11e9xxh';
        const Public_Keys = '_B6O2vEghvCr-WGkh';

        setIsLoading(true)

        const TemplateParams = {
          from_name: formData.name,
          from_email: formData.email,
          to_name : 'Joy Mridha',
          message: formData.message,
        };
    
          emailjs.send(Service_ID, Template_ID, TemplateParams, Public_Keys).then((response) => {
              setIsLoading(false)
              setthankyou(true);
              setFormData({
                name: '',
                email: '',
                message: '',
              });
            }).catch((error) => {
            setIsLoading(false);
            seterror(true)
            console.error('Error sending Email', error);
          });
        }

  return (
    <section id='contact' className={`relative container ${color === 'light' ? 'bg-body-color' : 'bg-black'} px-3 md:px-10 mt-20 md:pt-32 mb-10`}>
        {/* heading */}
        <div className='flex flex-col items-center justify-center mb-7'>
                <h1 className={`${color === 'light' ? 'text-title-color-dark' : 'text-body-color'} font-bold text-4xl`}>Contact Me</h1>
                <p>Get in Touch</p>
        </div>
        {/* form and contact options */}
        <div className='flex flex-col lg:flex-row items-center text-center'>
            {/* contact options */}
            <div className='flex flex-col flex-[.5] gap-5'>
                <h1 className='mb-4 font-bold text-2xl'>Socials</h1>
                {/* box-1 */}
                <div className='flex flex-col items-center gap-1 shadow-md p-3 w-80 px-5 rounded-md border-[1px] border-gray-300 lg:w-1/2 mx-auto'>
                    <div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                    </svg></div>
                    <h1>Email</h1>
                    <p className='text-text-color text-sm'>joymridha2004@gmail.com</p>
                    <div className='flex items-center gap-2 text-text-color text-sm cursor-pointer'><a href="mailto:joymridha2004@gmail.com">write me</a><span><BsArrowRightShort/></span></div>
                </div>
                {/* box-2 */}
                <div className='flex flex-col items-center gap-1 shadow-md p-3 px-5 w-80 rounded-md border-[1px] border-gray-300 lg:w-1/2 mx-auto'>
                    <div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                    </svg></div>
                    <h1>LinkedIn</h1>
                    <p className='text-text-color'>Joy Mridha</p>
                    <div className='flex items-center gap-2 text-text-color text-sm cursor-pointer'><a href="https://www.linkedin.com/in/joymridha">Write me</a> <span><BsArrowRightShort/></span></div>
                </div>
                {/* box-3 */}
                <div className='flex flex-col items-center gap-1 shadow-md p-3 px-5 w-80 rounded-md border-[1px] border-gray-300 lg:w-1/2 mx-auto'>
                    <div><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                    </svg></div>
                    <h1>Twitter</h1>
                    <p className='text-text-color'>@JoyMridha14</p>
                    <div className='flex items-center gap-2 text-text-color text-sm cursor-pointer'><a href="https://twitter.com/joymridha14">write me</a> <span><BsArrowRightShort/></span></div>
                </div>
            </div>
            {/* <div className='flex-[.5] flex flex-col gap-5'> */}
            <div className='mt-10 md:mt-0 flex-[.5] flex flex-col gap-5'>
            {/* <h1 className='mb-4 font-bold text-2xl'>Write me your project</h1> */}
            {/* buttons */}
            <div className='flex items-start gap-10 mx-auto'>
              <button onClick={contact} className={`px-3 py-2 border-[2px] ${contactOpen === 1 ? color === 'light' ? 'Onshadow' : 'border-text-color hover:border-white' : 'shadow-lg'} transition-all duration-300 rounded-lg`}>
              <h1>Contact</h1>
              </button>
              <button onClick={chat} className={`px-3 py-2 border-[2px] ${contactOpen === 2 ? color === 'light' ? 'Onshadow' : 'border-text-color hover:border-white' : 'shadow-lg'} transition-all duration-300 rounded-lg`}>
              <h1>Have a Chat</h1>
              </button>
            </div>
            {/* name */}
            {contactOpen === 1 && 
            <form method="post" className='flex flex-col item-center gap-5' onSubmit={handleSubmit}>
            <div class="relative">
            <input type="text" name='name' value={formData.name} onChange={handleChange} id="floating_outlined" class={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg ${color === 'light' ? 'outline-black' : 'outline-white'} outline transition-all duration-200`} placeholder="Write your name" required autoComplete='off' />
                <label for="floating_outlined" class={`absolute text-sm text-gray-400  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${color === 'light' ? 'bg-[#fafafa]' : 'bg-black'} px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}>Name</label>
            </div>
            {/* for Errors */}
            {errors.name && <span className="error text-red-500 text-xs">{errors.name}</span>}
            {/* mail */}
            <div class="relative">
                <input type="email" name='email' value={formData.email} onChange={handleChange} id="floating_outlined" class={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg ${color === 'light' ? 'outline-black' : 'outline-white'} outline transition-all duration-200`} placeholder="Write your email" required autoComplete='off' />
                <label for="floating_outlined" class={`absolute text-sm text-gray-400  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${color === 'light' ? 'bg-[#fafafa]' : 'bg-black'} px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}>Mail</label>
            </div>
            {errors.email && <span className="error text-red-500 text-xs">{errors.email}</span>}
            {/* messsage */}
            <div class="relative">
                <textarea name='message' value={formData.message} onChange={handleChange} rows={10} type="text" id="floating_outlined" class={`block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent  rounded-lg ${color === 'light' ? 'outline-black' : 'outline-white'} outline transition-all duration-200`} placeholder="Write your message" required autoComplete='off' />
                <label for="floating_outlined" class={`absolute text-sm text-gray-400  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${color === 'light' ? 'bg-[#fafafa]' : 'bg-black'} px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}>Message</label>
            </div>
            {errors.message && <span className="error text-red-500 text-xs">{errors.message}</span>}
            {/* button */}
            <div class="flex w-full flex-row items-center justify-center mt-3">
              <button type='submit' class="animate-border mr-auto inline-block rounded-xl bg-white bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500 bg-[length:400%_400%] p-[4px]">
                <span class={`block rounded-lg ${color === 'light' ? 'bg-body-color' : 'bg-black'} px-3 py-2 font-bold `}> {loading ? ( <Loading /> ) : ( <>Send <span><SendRoundedIcon /></span></>)} </span>
              </button>
            </div>
            </form>}
            {contactOpen === 2 &&  
            <>
            <div className='h-30 inline-widget'>
              <InlineWidget url="https://calendly.com/joymridha2004/30min" 
              pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideLandingPageDetails: true,
              primaryColor: '00a2ff',
              textColor: '4d5055'
            }} />
            </div>
            </>
            }
          </div>
        </div>
        {thankyou && <Thankyou name={formData.name} color={color} setthankyou={setthankyou} />}
        {error && <Error seterror={seterror} color={color} />}
        {/* </div> */}
    </section>
  )
}

export default Contact