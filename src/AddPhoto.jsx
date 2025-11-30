import axios from "axios";
import { useForm } from "react-hook-form"

export default function AddPhoto() {

    function save(data) {
        console.log(data);
        axios.post('https://jsonplaceholder.typicode.com/photos', data).then(response => {//חוסך לי להמיר את הבודי לגייסון וכן לשלוח הדרס....

            console.log('response from server:', response.data);
            alert('Photo added with id: ' + response.data.id);//התוצאה תמיד מתקבלת בתוך response.data
        })

    }
    let { register, handleSubmit } = useForm();


    return <form onSubmit={handleSubmit(save)}>

        <label>title</label>
        <input {...register("title")} />
        <label>url</label>
        <input {...register("url")} />
        <label>thumbnailUrl</label>
        <input {...register("thumbnailUrl")} />
        <label>albumId  </label>
        <input {...register("albumId")} />
        <input type="submit" value="Add Photo" />
    </form>
}