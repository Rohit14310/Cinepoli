import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDEzZDgwM2Q4NTI4YmM3OTZlODMyNDZiY2Y4MGFjMyIsIm5iZiI6MTczODkxOTk4MC42Niwic3ViIjoiNjdhNWQwMmNiZjM2MDQwYzVkODVmMGViIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.WiESxE_ayjc-dmIscWPyJXJa1gqFPBzO9fwUYMLtFk8",
  },
});

export default instance;
