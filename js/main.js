
function baseball(name, year, cost, img) {
	this.name = name
	this.year = year
	this.cost = cost
	this.img = img
	
}



var dJeter = new baseball('Derek Jeter', 2001, "$199.00", "http://www.a1sportscollectibles.com/images/derek-jeter-autographed-baseball.jpg")
var kGruber = new baseball('Kelly Gruber', 1990, "$199.00", "https://s-media-cache-ak0.pinimg.com/736x/f9/63/7f/f9637ffb0a2c900b9edec9f2ac509f7e.jpg")
var tTulo = new baseball('Troy Tulowitzki', 2010, "$199.00", "https://s-media-cache-ak0.pinimg.com/564x/53/04/29/53042990bcfc449041e879bd83a14056.jpg")
var mScherzer = new baseball('Max Scherzer', 2015, "$199.00", "http://www.grandstandsports.com/images/49279.jpg")
var aMcCutch = new baseball('Andrew McCutchen', 2014, "$199.00", "http://www.grandstandsports.com/images/21480.jpg")
var nRyan = new baseball('Nolan Ryan', 1984, "$699.00", "http://cdn.sportsmemorabilia.com/sports-product-image/nolan-ryan-autographed-mlb-baseball-1319-t23482-500.jpg")
var mMantle = new baseball('Mickey Mantle', 1953, "$2199.00", "http://img.ecomplatform.com/scs/images/products/116/larger/mickey_mantle_autographed_signed_new_york_yankees_baseball_jsa_certified_authentic_autographed_signed_baseballs_p553876.jpg")
var rClemente = new baseball('Roberto Clemente', 1970, "$1900.00", "http://www.autographwarehouse.com/images/products/detail/Roberto_Clemente.JPG")
var jAltuve = new baseball('Jose Altuve', 2015, "$199.00", "http://fhsentertainment.com/wp-content/uploads/2015/04/51r0nI1vFDL.jpg")
var cUtley = new baseball('Chase Utley', 2007, "$199.00", "http://www.grandstandsports.com/images/21162.jpg")
var aJones = new baseball('Adam Jones', 2012, "$199.00", "https://images-na.ssl-images-amazon.com/images/I/51nLmSIJK3L.jpg")
var mMcguire = new baseball('Mark McGuire', 1996, "$199.00", "https://images-na.ssl-images-amazon.com/images/I/51hhkfnJRIL.jpg")


var myArray = [dJeter, kGruber, tTulo, mScherzer, aMcCutch, nRyan, mMantle, rClemente, jAltuve, cUtley, aJones, mMcguire]

for (var i = 0; myArray.length; i++) {
	var bName = document.createTextNode(myArray[i].name)
	var ySigned = document.createTextNode("Year Signed " + myArray[i].year)
	var price = document.createTextNode("Price: " + myArray[i].cost)
	var bButton = document.createTextNode('Buy Now!')
	var bImg = myArray[i].img

	var newCol = document.createElement('DIV')
	var newDiv = document.createElement('DIV')
	var ballName = document.createElement('H1')
	var ballYear = document.createElement('H4')
	var ballCost = document.createElement('H4')
	var buyNow = document.createElement('button')
	var ballPic = document.createElement('img')

	ballName.appendChild(bName)
	ballYear.appendChild(ySigned)
	ballCost.appendChild(price)
	buyNow.appendChild(bButton)
	buyNow.className = "btn btn-primary btn-lg"
	ballPic.src = bImg
	ballPic.className = 'img-responsive'

	newCol.className = "col-sm-4"
	newDiv.className = "Ball BaseballName" + i + " thumbnail"
	newDiv.appendChild(ballName)
	newDiv.appendChild(ballYear)
	newDiv.appendChild(ballPic)
	newDiv.appendChild(ballCost)
	newDiv.appendChild(buyNow)
	newCol.appendChild(newDiv)

	document.getElementById("body").appendChild(newCol)



}









