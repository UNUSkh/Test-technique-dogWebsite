import React, { useState, useEffect } from 'react';
import CustomCard from '../components/CustomCard';
function DogBreedSearch() {
  const [breed, setBreed] = useState('');
  const [breedslist, setBreedslist] = useState([]);
  const [breedImages, setBreedImages] = useState([]);
  const [isIn, setisIn] = useState(false);
  const [isSearching, SetisSearching] = useState(false);
  useEffect(() => {
    BreedsSearch();
  }, [])
  useEffect(() => {
    setBreedImages([]);
  }, [breed])
  const BreedsSearch = async () => {
    const breedsArray = [];
    SetisSearching(true);
    await fetch(`https://dog.ceo/api/breeds/list/all`)
      .then(response => response.json())
      .then(data => {
        for (var a in data.message) {
          //for(var b in data.message[a]) breedslist.push(a+"-"+b);
          //data.message[a].length()==0? breedsArray.push(a ):
          breedsArray.push(a);
          data.message[a].map((bred) => { breedsArray.pop(); breedsArray.push(a + " " + bred); return 0 });
        }
        SetisSearching(false);
      });

    setBreedslist([...breedslist, ...breedsArray]);
    //console.log(breedslist)
  };
  const handleSearch = async () => {
    SetisSearching(true);
    await fetch(`https://dog.ceo/api/breed/${breed.trimEnd().replace(/ /g, "/").toLowerCase()}/images`)
      .then(response => response.json())
      .then(data => {
        if (data.status !== "error")
          setBreedImages(data.message)
      });
    SetisSearching(false);
  };
  const Handlbreedchange = (value) => {
    setisIn(false);
    setBreed(value);
    breedslist.map((bred) => {
      if (bred.toLowerCase() === value.trimEnd().toLowerCase()) setisIn(true); return 0;
    })
  }

  return (
    <div>
      <h2 className="mb-4">Search for a Dog Breed</h2>
      <div className="mb-3">

        <input
          type="text"
          className="form-control"
          value={breed}
          onChange={(e) => Handlbreedchange(e.target.value.toString())}
          placeholder="Enter breed name" style={{ color: "rgb(240, 240, 240)" }}
        />
      </div>
      <button className="btn btn-primary mb-4" disabled={!isIn} onClick={handleSearch} style={{ backgroundColor: "rgb(22, 22, 22) ", border: " solid 0.5px rgb(220, 220, 220)", borderRadius: "4px" }}><i class="fa fa-paw" aria-hidden="true"></i>  Search   </button>
      <div className="row">
        {breedImages.length > 0 ? (
          breedImages.slice(0, 6).map((image, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <CustomCard image={image} />
            </div>
          ))
        ) : (<>

          {!isIn ? <p className="text-center">No images found for this breed</p> : <p className="text-center">Click to search for your dog</p>}
        </>
        )}
        {isSearching? <>search</>:<></>}
      </div>
    </div>

  );
}

export default DogBreedSearch;
