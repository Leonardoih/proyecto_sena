import axios from "axios";

const getDatos =() => {
    const res = await axios.get()
    setDate(res.data);
}