points_mandelquad = [
	{
	    "id": "heller_e01",
	    "coordinate":new Point(42.369115, -71.258427),
	    "type": "entrance",
	},
	{
	    "id": "heller_c01",
	    "coordinate":new Point(42.369217, -71.258240),
	    "type": "crossing",
	},
	{
	    "id": "heller_c02",
	    "coordinate":new Point(42.369328, -71.258055),
	    "type": "crossing",
	},
    {
	    "id": "heller_c03",
	    "coordinate":new Point(42.369563, -71.258777),
	    "type": "crossing",
	},
	
	{
	    "id": "mandel_e01",
	    "coordinate":new Point(42.369592, -71.258119),
	    "type": "entrance",
	},
	{
	    "id": "mandel_e02",
	    "coordinate":new Point(42.369723, -71.258568),
	    "type": "entrance",
	},
	{
	    "id": "mandel_c01",
	    "coordinate":new Point(42.369609, -71.258578),
	    "type": "crossing",
	},
	{
	    "id": "rabb_e01",
	    "coordinate":new Point(42.369108, -71.257294),
	    "type": "entrance",
	},
	{
	    "id": "rabb_c01",
	    "coordinate":new Point(42.368772, -71.257132),
	    "type": "crossing",
	},
	{
	    "id": "rabb_c02",
	    "coordinate":new Point(42.369069, -71.257222),
	    "type": "crossing",
	},
	{
	    "id": "rabb_c03",
	    "coordinate":new Point(42.369369, -71.257259),
	    "type": "crossing",
	},
	{
	    "id": "olin-sang_e01",
	    "coordinate":new Point(42.369461, -71.257387),
	    "type": "entrance",
	},
	{
		//**
	    "id": "olin-sang_e02",
	    "coordinate":new Point(42.369790, -71.257683),
	    "type": "entrance",
	},
	{
		//inner entrance btwn olin-sang and mandel center for humanities
	    "id": "olin-sang_ie01",
	    "coordinate":new Point(42.369640, -71.257862),
	    "type": "ientrance",
	},
	{
	    "id": "shiffman_e01",
	    "coordinate":new Point(42.369657, -71.257098),
	    "type": "entrance",
	},
	{
	    "id": "shiffman_c01",
	    "coordinate":new Point(42.369575, -71.257270),
	    "type": "crossing",
	},
	{
	    "id": "lown_e01",
	    "coordinate":new Point(42.370079, -71.257324),
	    "type": "entrance",
	},
	{
	    "id": "golding_e01",
	    "coordinate":new Point(42.370020, -71.257716),
	    "type": "entrance",
	},
	{
	    "id": "golding_c01",
	    "coordinate":new Point(42.369817, -71.257635),
	    "type": "crossing",
	},
	{
	    "id": "golding_c02",
	    "coordinate":new Point(42.369888, -71.257533),
	    "type": "crossing",
	},
]

function Point(x,y) {
	this.x = x;
	this.y = y;
}