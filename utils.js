function redirectToRandomURL() {
    var urls = [
      "https://docs.google.com/forms/d/e/1FAIpQLSerq5QDkI5csUhHUycyKlE5yXmEKihTTx27xZCPXiydtHSQMA/viewform?usp=sf_link",	//Aqua, Hikes and more
      "https://docs.google.com/forms/d/e/1FAIpQLSedt1wtIMz1rXphAXaCmu3eX76jWsCJH3hKNVIXqsXfZZnIMg/viewform?usp=sf_link",	//Halfweg
      "https://docs.google.com/forms/d/e/1FAIpQLSd-WTAWQHekPEbi87RVvVAsVJQCQs6obIPn3IkUNyt6JgiKiA/viewform?usp=sf_link",	//Boulevard
      "https://docs.google.com/forms/d/e/1FAIpQLSdLh26-VaJ4MWzxVGQ9bZ2PCoNywKd1ppCbDvdSzGXzKve_FQ/viewform?usp=sf_link",	//Subcamp Yellow
      "https://docs.google.com/forms/d/e/1FAIpQLSejNnJlbor-7g7hDXOGhaxwMpk4ct51bBVRJxiIg_hjXX6Hog/viewform?usp=sf_link",	//Subcamp red
      "https://docs.google.com/forms/d/e/1FAIpQLSffZIMTh2ka492rVGr6owWga4BsYsAeGgGRjLnBdvIJa5L_VQ/viewform?usp=sf_link",	//Subcamp orange
      "https://docs.google.com/forms/d/e/1FAIpQLSeNxLFry3662TQf5EFFbEkxr_DB_2CTTbAEjh9P-solZQacTA/viewform?usp=sf_link"	//Subcamp green
    ];

    var randomIndex = Math.floor(Math.random() * urls.length);
    var randomURL = urls[randomIndex];

    window.location.href = randomURL;
  }

  