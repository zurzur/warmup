/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let trianglesCount = 0;
  let participantsList = preferences;

  let a, b, c, d;

  for (let i = 0; i < preferences.length; i++) {

  	if (participantsList[i] > 0) {

  		a = i + 1;
  		b = participantsList [i];

  		if ((b > 0) && (b != a)) {

  			c = participantsList[b-1];

  			if (c>0 && c!=b) {

  				d = participantsList[c-1];
  				
  				if (a == d) {
  					trianglesCount += 1;
  			
  					participantsList[c - 1] = 0;
  					participantsList[b - 1] = 0;
  					participantsList[i] = 0;
  				}

  			}

  		}

  	}

}

  return trianglesCount;

};
