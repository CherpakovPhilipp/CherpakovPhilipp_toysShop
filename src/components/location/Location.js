import './location.scss';
import $ from 'jquery';

class GoogleMap {
  constructor(container, position) {
    this.container = container;
	  this.position = position;
    this._googleMapKey = 'AIzaSyBApIxlKjCG4nPYE2GnZa6UltnP8JqMdgA';
    this.zoom = 15;
    this.setPosition();
  }

  async setPosition() {
    if (!this.position) {
      this.position = await this.getLocation();
    } else {
      this.position = position
    }
  }

  async getLocation() {
    if (navigator.geolocation) {
      const res = new Promise ((res) => {
        navigator.geolocation.getCurrentPosition((position) => {
          const obj =  {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
  
          res(obj);
        })
      });
  
      return await res;
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

	changePosition(position) {
		this.map.panTo(position);
		this.marker.setPosition(position);
	}

	initMap = () => {
    if (!this.initialized) $.getScript('https://maps.googleapis.com/maps/api/js?key=' + this._googleMapKey + '', this.setMap)
    else this.setMap();

    this.initialized = true;
	}

	setMap = () => {
		this.map = new google.maps.Map(document.querySelector(this.container), {
			center: this.position,
			zoom: this.zoom
		});

		this.marker = new google.maps.Marker({
			position: this.position,
			map: this.map
		});
	}
}

const map = new GoogleMap('.map');

export const Location = () => {
  const handleForm = (event) => {
    event.preventDefault();
  
    if (map && map.position){
      map.changePosition({lat: +event.target.lat.value, lng: +event.target.lng.value});
    }
  }

  return (
    <div className="location">
      <button onClick={map.initMap}>Show my position</button>
      <form onSubmit={(event) => {handleForm(event)}}>
        <button type="submit">Set new position</button>
        <input placeHolder="latitude" id="lat" type="text"/>
        <input placeHolder="longitude" id="lng" type="text"/>
      </form>
      <div className="map"></div>
    </div>
  )
}
