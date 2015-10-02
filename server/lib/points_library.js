// points of library
points_library = [
	//library
	{
	    "id": "goldfarb_e01",
	    "coordinate":new Point(42.367939, -71.258273 ),
	    "type": "entrance",
	},
	{
	    "id":"goldfarb_e02",
	    "coordinate":new Point(42.368090, -71.257938),
	    "type":"entrance"
	},
	{
	    "id":"farber_e01",
	    "coordinate":new Point(42.367832, -71.258425),
	    "type":"entrance"
	},
    {
	    "id":"farber_ie01",
	    "coordinate":new Point(42.367936, -71.258442),
	    "type":"ientrance"
	}, 
    {
	    "id":"library_ie01",
	    "coordinate":new Point(42.367970, -71.258376),
	    "type":"ientrance"
	}, 
	{
	    "id": "library_c01",
	    "coordinate":new Point(42.367638, -71.258299),
	    "type": "crossing",
	},
	{
	    "id": "library_c02",
	    "coordinate":new Point(42.367713, -71.257816),
	    "type": "crossing",
	},
	{
	    "id": "library_c03",
	    "coordinate":new Point(42.367899, -71.257628),
	    "type": "crossing",
	},
	{
	    "id": "library_c04",
	    "coordinate":new Point(42.368813, -71.257312),
	    "type": "crossing",
	},
	{
	    "id": "library_c05",
	    "coordinate":new Point(42.367712, -71.257475),
	    "type": "crossing",
	},

]

function Point(x,y) {
	this.x = x;
	this.y = y;
}