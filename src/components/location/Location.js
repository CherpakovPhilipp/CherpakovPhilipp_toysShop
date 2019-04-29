import './location.scss';
import $ from 'jquery';

class GoogleMap {
  constructor(container, position) {
    this.container = container;
	  this.position = position;
    this._googleMapKey = 'AIzaSyBApIxlKjCG4nPYE2GnZa6UltnP8JqMdgA';
    this.zoom = 15;
    this.checkPosition();
  }

  checkPosition() {
    if(this.position instanceof Function) {
      this.position().then((pos) => {
        this.position = pos;
      })
    }
  }
	
	changePosition(position) {
		this.map.panTo(position);
		this.marker.setPosition(position);
	}
	
	initMap = () => {
    $.getScript('https://maps.googleapis.com/maps/api/js?key=' + this._googleMapKey + '', this._setMap);
	}
	
	_setMap = () => {
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

const getLocation = async() => {
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

const handleForm = (event) => {
  event.preventDefault();
  
  if (map && map.position){
    map.changePosition({lat: +event.target.lat.value, lng: +event.target.lng.value});
  }
}

const map = new GoogleMap('.map', getLocation);

export const Location = () => {
  return (
    <div className="location">
      <button onClick={map.initMap}>Show my position</button>
      <form onSubmit={(event) => {handleForm(event)}}>
        <button type="submit">Set new position</button>
        <input id="lat" type="text"/>
        <input id="lng" type="text"/>
      </form>
      <div className="map"></div>
    </div>
  )
}
