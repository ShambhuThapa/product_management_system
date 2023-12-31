import {ToastOptions, toast} from "react-toastify";
type ToastType="error" | "success";

export const showToast=(type:ToastType,text:string,options?:Partial<ToastOptions>)=>{
 const toastFn = type=== "error" ?toast.error:toast.success;
 const toastOptions:ToastOptions={
    position:"top-right",
    autoClose:2500,
    hideProgressBar:false,
    closeOnClick:true,
    pauseOnHover:true,
    draggable:true,
    progress:undefined,
    theme:"light"
 }
 toastFn(text,{...toastOptions,...options})
}