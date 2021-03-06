// include gym, mailman, health center, public safty and castle
paths_gym = [
	{
		"start":"gosman_c01",
		"end":"athleticslot_e01",
		"description":"Turn and go toward the South Street."
	},
	{
		"start":"athleticslot_e01",
		"end":"gosman_c01",
		"description":"Get off South street and go forward."
	},
	{
		"start":"athleticslot_e01",
		"end":"athleticslot_e02",
		"description":"Cut across the parking lot to the other side, where there is a sidewalk."
	},
	{
		"start":"athleticslot_e02",
		"end":"athleticslot_e01",
		"description":"Cut caross the parking lot to the other side, to the road next to Gosman."
	},
	// fields and stuff
	{
		"start":"athleticslot_e01",
		"end":"athleticslot_e03",
		"description":"Walk halfway across the parking lot, to where the parking lot meets the path leading down to the fields."
	},
	{
		"start":"athleticslot_e03",
		"end":"athleticslot_e01",
		"description":"Cut across the parking lot to the road that leads out to South Street."
	},
	{
		"start":"athleticslot_e02",
		"end":"athleticslot_e03",
		"description":"Walk halfway across the parking lot, to where the parking lot meets the path leading down to the fields."
	},
	{
		"start":"athleticslot_e03",
		"end":"athleticslot_e02",
		"description":"Cut across the parking lot towards Lemberg and the track, away from Gosman."
	},
	{
		"start":"athleticslot_e02",
		"end":"gordonfield_e01",
		"description":"Head along the sidewalk, between the baseball field and track."
	},
	{
		"start":"gordonfield_e01",
		"end":"athleticslot_e02",
		"description":"Exit the track and take the sidewalk left, towards the parking lot."
	},
	{
		"start":"athleticslot_e03",
		"end":"gordonfield_e01",
		"description":"Walk down the path towards the track."
	},
	{
		"start":"gordonfield_e01",
		"end":"athleticslot_e03",
		"description":"Walk up the sidewalk towards the parking lot."
	},
	{
		"start":"athleticslot_e02",
		"end":"gordonfield_e02",
		"description":"Facing the track, take the rightmost concrete sidewalk."
	},
	{
		"start":"gordonfield_e02",
		"end":"athleticslot_e02",
		"description":"Leave Gordon Field and walk along the sidewalk towards the parking lot."
	},
	{
		"start":"gordonfield_e02",
		"end":"gordonfield_e03",
		"description":"Head straight down the track to the other side."
	},
	{
		"start":"gordonfield_e03",
		"end":"gordonfield_e02",
		"description":"Head straight up the track to the other side."
	},
	{
		"start":"gordonfield_e01",
		"end":"gordonfield_e02",
		"description":"Walk around the curve of the track to the gate on the other side."
	},
	{
		"start":"gordonfield_e02",
		"end":"gordonfield_e01",
		"description":"Walk around the curve of the track to the gate on the other side."
	},
	{
		"start":"athleticslot_e03",
		"end":"steindiamond_e02",
		"description":"Walk down the path and onto the grass to the baseball field."
	},
	{
		"start":"steindiamond_e02",
		"end":"athleticslot_e03",
		"description":"Climb up the small hill and onto the path to the parking lot."
	},
	{
		"start":"athleticslot_e03",
		"end":"marcusfield_e01",
		"description":"Walk down the path and then onto the grass between the baseball field and track until you reach the softball field in the back."
	},
	{
		"start":"marcusfield_e01",
		"end":"athleticslot_e03",
		"description":"Walk along the grass between the baseball field and the track until you reach the parking lot next to South Street."
	},
	{
		"start":"gosman_c02",
		"end":"marcusfield_e02",
		"description":"Cut through the back parking lot and walk along the path until you reach the softball field."
	},
	{
		"start":"marcusfield_e02",
		"end":"gosman_c02",
		"description":"Take the sidewalk behind the baseball field until you reach the main road behind Gosman next to the tennis courts."
	},
	{
		"start":"marcusfield_e01",
		"end":"gordonfield_e01",
		"description":"Walk along the edge of the track and enter the gate on your left."
	},
	{
		"start":"gordonfield_e01",
		"end":"marcusfield_e01",
		"description":"Exit the track and turn right, following the edge of the track until you reach the softball field."
	},
	
	{
		"start":"marcusfield_e01",
		"end":"marcusfield_e02",
		"description":"Cut across the softball field."
	},
	{
		"start":"marcusfield_e02",
		"end":"marcusfield_e01",
		"description":"Cut across the softball field."
	},
	
	//connecting fields to lemberg
	{
		"start":"gordonfield_e03",
		"end":"lemberg_c02",
		"description":"Walk out onto the dirt path and swing a right. Take the first left in the direction of Lemberg."
	},
	{
		"start":"lemberg_c02",
		"end":"gordonfield_e03",
		"description":"Walk down the dirt road then take a right. Follow the dirt road left to the entrance to Gordon Field."
	},
	{
		"start":"gordonfield_e03",
		"end":"commuterrail_c02",
		"description":"Cross the green field, heading for the fence gate closest to the train station."
	},
	{
		"start":"commuterrail_c02",
		"end":"gordonfield_e03",
		"description":"Cross the green field to the fence gate closest to the train station."
	},
	{
		"start":"lemberg_c02",
		"end":"commuterrail_c02",
		"description":"Head down the dirt road and then take a right. At the end of the dirt road, take a right across the green field towards the fence gate closet to the train station."
	},
	{
		"start":"commuterrail_c02",
		"end":"commuterrail_e02",
		"description":"Walk to the commuter rail ramp."
	},
	{
		"start":"commuterrail_e02",
		"end":"commuterrail_c02",
		"description":"Turn right and pass through the fence gate."
	},
	{
		"start":"commuterrail_c02",
		"end":"commuterrail_c01",
		"description":'Cross the parking lot and head for the sidewalk.'
	},
	{
		"start":"commuterrail_c01",
		"end":"commuterrail_c02",
		"description":'Cross the parking lot, heading to the gap in the fence closet to the train station.'
	},
	//gosman and linsey
	{
		"start":"gosmanparkinglot_e02",
		"end":"gosmanparkinglot_e01",
		"description":"Pass through the parking lot."
	},
	{
		"start":"gosmanparkinglot_e01",
		"end":"gosmanparkinglot_e02",
		"description":"Pass through the parking lot."
	},
	{
		"start":"gosman_e01",
		"end":"gosman_ic01",
		"description":"Enter Gosman and then veer right through the glass doors to the hallway next to concessions."
	},
	{
		"start":"gosman_ic01",
		"end":"gosman_e01",
		"description":"Head to Gosman's main entrance."
	},
	{
		"start":"gosman_ic01",
		"end":"gosman_e04",
		"description":"Enter the gym on your left. Head for the doors on the far right corner that will lead you to the pool access."
	},
	{
		"start":"gosman_e04",
		"end":"gosman_ic01",
		"description":"Open the doors into the gym and exit into the hallway on the left."
	},
	{
		"start":"gosman_ic01",
		"end":"gosman_ic02",
		"description":"Head down the hallway to the very end. Go through the doors on your right and down a flight of stairs."
	},
	{
		"start":"gosman_ic02",
		"end":"gosman_ic01",
		"description":"Head up one flight of stairs and exit the door into the hallway. Continue down the hallway to the sets of glass doors."
	},
	{
		"start":"gosman_ic02",
		"end":"gosman_e05",
		"description":"Take the one-way exit out of Gosman's stairwell to the outside."
	},
	{
		"start":"gosman_e05",
		"end":"linsey_c02",
		"description":"Go down the stairs and to the intersection straight in front."
	},
	{
		"start":'gosman_ic01',
		"end":"fieldhouse_ie01",
		"description":"Head down the steps to Auerbach Arena (the Fieldhouse)."
	},
	{
		"start":"fieldhouse_ie01",
		"end":"gosman_ic01",
		"description":"Head up the steps to the top level."
	},
	// gosman linsey outside
	{
		"start":"gosman_c01",
		"end":"linsey_c01",
		"description":"Continue on South Street."
	},
	{
		"start":"linsey_c01",
		"end":"gosman_c01",
		"description":"Continue on South Street."
	},
	{
		"start":"gosman_e01",
		"end":"athleticslot_e01",
		"description":"Exit the gym and go around the small loop to the main road next to the flags."
	},
	{
		"start":"athleticslot_e01",
		"end":"gosman_e01",
		"description":"Head towards the flags to the main entrance of Gosman."
	},
	{
		"start":"gosman_c02",
		"end":"athleticslot_e01",
		"description":"Continue down the road, away from South Street towards the tennis courts."
	},
	{
		"start":"athleticslot_e01",
		"end":"gosman_c02",
		"description":"Continue on the road away from the tennis courts, towards South Street and the bridge."
	},
	{
		"start":"linsey_c02",
		"end":"linsey_c01",
		"description":"Pass under the skywalk between Linsey and Gosman, going uphill towards South Street."
	},
	{
		"start":"linsey_c01",
		"end":"linsey_c02",
		"description":"Head downhill under the skywalk between Linsey and Gosman."	
	},
	{
		"start":"linsey_c02",
		"end":"gosmanparkinglot_e01",
		"description":"Continue along the road on the side of Gosman towards the tennis courts."
	},	
	{
		"start":"gosmanparkinglot_e01",
		"end":"linsey_c02",
		"description":"Go straight along the road on the side of Gosman, heading away from the tennis courts in the direction of the skywalk."
	},
	{
		"start":"linsey_c02",
		"end":"linsey_c03",
		"description":"Head along the road adjacent to Linsey, away from Gosman with the parking lot on your right."
	},
	{
		"start":"linsey_c03",
		"end":"linsey_c02",
		"description":"Head slightly uphill along the road, keeping Linsey to your right and the parking lot on your left."
	},
	{
		"start":"gosman_e02",
		"end":"linsey_c02",
		"description":"Exit Gosman and veer left towards the intersection."
	},
	{
		"start":"gosman_e03",
		"end":"gosmanparkinglot_e01",
		"description":"Exit Gosman and veer left towards the parking lot."
	},
	{
		"start":"gosman_e03",
		"end":"gosman_c02",
		"description":"Exit Gosman, turn right and walk along the path next to the parking lot."
	},
	{
		"start":"gosman_e04",
		"end":"linsey_c02",
		"description":"Exit Gosman Gym by going down the stairs, turning right, and walking away from South Street towards the parking area."
	},
	{
		"start":"gosman_e04",
		"end":"linsey_c01",
		"description":"Exit Gosman Gym by going down the stairs, turning left, and walking toward South Street."
	},
	{
		"start":"gosman_e04",
		"end":"linsey_e01",
		"description":"Walk across the skywalk between Gosman and Linsey."
	},
	{
		"start":"linsey_e01",
		"end":"gosman_e04",
		"description":"Walk across the skywalk."
	},
	{
		"start":"linsey_c01",
		"end":"linsey_c04",
		"description":"Continue walking along South Street."
	},
	{
		"start":"linsey_c04",
		"end":"linsey_c01",
		"description":"Continue walking along South Street."
	},
	{
		"start":"linsey_e02",
		"end":"linsey_c04",
		"description":"Exit Linsey and walk down the path towards South Street."
	},
	{
		"start":"linsey_c01",
		"end":"superconducting_c01",
		"description":"Walk across the road at the crosswalk."
	},
	{
		"start":"superconducting_c01",
		"end":"linsey_c01",
		"description":"Walk across the road at the crosswalk."
	},
	{
		"start":"superconducting_c01",
		"end":"healthcenter_c01",
		"description":"Walk up the stairs."
	},
	{
		"start":"healthcenter_c01",
		"end":"superconducting_c01",
		"description":"Walk down the stairs to the crosswalk."
	},
	// mods
	{
		"start":"linsey_c04",
		"end":"uppermods_c01",
		"description":"Take the small set of stairs down to the Upper Mods."
	},
	{
		"start":"uppermods_c01",
		"end":"linsey_c04",
		"description":"Take the set of stairs up to South Street."
	},
	{
		"start":"uppermods_c01",
		"end":"linsey_c03",
		"description":"Walk down to the main road."
	},
	{
		"start":"linsey_c03",
		"end":"uppermods_c01",
		"description":"Head past the recycling and trash dumpsters to the gravel path."
	},
	{
		"start":"uppermods_c01",
		"end":'uppermods_e01',
		"description":"Turn left towards the Upper Mods."
	},
	{
		"start":"uppermods_e01",
		"end":"uppermods_c01",
		"description":"Turn right onto the gravel path."
	},
	{
		"start":"linsey_c03",
		"end":"uppermods_e01",
		"description":"Walk up the slope."
	},
	{
		"start":"uppermods_e01",
		"end":"linsey_c03",
		"description":"Walk down the slope."
	},
	{
		"start":"linsey_c03",
		"end":"linseyparkinglot_e01",
		"description":"Follow the path toward the clump of trees."
	},
	{
		"start":"linseyparkinglot_e01",
		"end":"lowermods_e01",
		"description":"Veer left for the Lower Mods."
	},
	{
		"start":"lowermods_e01",
		"end":"linseyparkinglot_e01",
		"description":"Facing parallel to the tennis courts, turn right."
	},
	{
		"start":"gosmanparkinglot_e02",
		"end":"lowermods_e01",
		"description":"Veer right for the Lower Mods."
	},
	{
		"start":"lowermods_e01",
		"end":"gosmanparkinglot_e02",
		"description":"Facing parallel to the tennis courts, turn left."
	},
	{
		"start":"gosmanparkinglot_e01",
		"end":"rieger_e01",
		"description":"Head to the opening for the tennis courts."
	},
	{
		"start":"rieger_e01",
		"end":"gosmanparkinglot_e01",
		"description":"Exit the courts and walk out to the road."
	},
	// parking lots
	{
		"start":"linseyparkinglot_e01",
		"end":"linsey_c03",
		"description":"Follow the path beside the clump of trees."
	},
	{
		"start":"gosmanparkinglot_e02",
		"end":"linseyparkinglot_e01",
		"description":"Follow the path toward the clump of trees."
	},
	{
		"start":"linseyparkinglot_e01",
		"end":"gosmanparkinglot_e02",
		"description":"Follow the path beside the clump of trees."
	},
	// squire bridge
	{
		"start":"mailman_c01",
		"end":"squirebridge_e02",
		"description":"Walk up to the bridge"
	},
	{
		"start":"squirebridge_e02",
		"end":"mailman_c01",
		"description":"Keep going for a bit, then turn right."
	},
	{
		"start":"gosman_e01",
		"end":"squirebridge_e01",
		"description":"Exit, veer right, and then climb up the stairs to the bridge."
	},
	{
		"start":"squirebridge_e01",
		"end":"gosman_e01",
		"description":"Walk down the stairs and walk to the flags. Turn right to the entrance of Gosman."
	},
	{
		"start":"squirebridge_e01",
		"end":"squirebridge_e02",
		"description":"Walk across the bridge."
	},
	{
		"start":"squirebridge_e02",
		"end":"squirebridge_e01",
		"description":"Walk across the bridge."
	},
	{
		"start":"rosenstiel_c01",
		"end":"squirebridge_c01",
		"description":"Cross the sidewalk to the top of the steps."
	},
	{
		"start":"squirebridge_c01",
		"end":"rosenstiel_c01",
		"description":"Cross the sidewalk."
	},
	{
		"start":"squirebridge_c01",
		"end":"mailman_c01",
		"description":"Climb down the stairs to the next landing."
	},
	{
		"start":"mailman_c01",
		"end":"squirebridge_c01",
		"description":"Head up the stairs."
	},
	{
		"start":"mailman_c01",
		"end":"sstreet_c01",
		"description":"Go down the slope."
	},
	{
		"start":"sstreet_c01",
		"end":"mailman_c01",
		"description":"Go up the slope."
	},
	{
		"start":"mailman_c01",
		"end":"mailman_e01",
		"description":"Turn left."
	},
	{
		"start":"mailman_e01",
		"end":"mailman_c01",
		"description":"Turn right."
	},
	{
		"start":"squirebridge_c01",
		"end":"mainentrance_c02",
		"description":"Go downhill along Loop Road."
	},
	{
		"start":"mainentrance_c02",
		"end":"squirebridge_c01",
		"description":"Go uphill along Loop Road."
	},
	//connecting to castle
	{
		"start":"castle_e02",
		"end":"usdan_c01",
		"description":"Walk toward the clump of trees on your right side."
	},
	{
		"start":"usdan_c01",
		"end":"castle_e02",
		"description":"Walk toward the castle in front of you."
	},
	{
		"start":"castle_e01",
		"end":"usdan_c01",
		"description":"Walk up the slope toward the clump of trees on your right side."
	},
	{
		"start":"usdan_c01",
		"end":"castle_e01",
		"description":"Walk down the slope toward the castle in front of you."
	},
	// health center area
	{
		"start":"healthcenter_c01",
		"end":"police_e01",
		"description":"Walk toward the parking lot near the buildings."
	},
	{
		"start":"police_e01",
		"end":"healthcenter_c01",
		"description":"Exit the public safety building and walk toward the parking lot."
	},
	{
		"start":"castle_e01",
		"end":"rosenstiel_c03",
		"description":"Walk down the slope with Castle on your left side."
	},
	{
		"start":"rosenstiel_c03",
		"end":"castle_e01",
		"description":"Walk up the slope with Castle on your right side."
	},
	{
		"start":"rubenstein_c01",
		"end":"healthcenter_c01",
		"description":"Walking down the slope toward the building in front of you."
	},
	{
		"start":"rosenstiel_c03",
		"end":"rubenstein_c01",
		"description":"Walk down the stairs."
	},
	{
		"start":"rubenstein_c01",
		"end":"rosenstiel_c03",
		"description":"Walk up the stairs."
	},
	{
		"start":"healthcenter_c01",
		"end":"rubenstein_c01",
		"description":"Walk up the slope toward Loop Road."
	},
	{
		"start":"healthcenter_e01",
		"end":"healthcenter_c01",
		"description":"Walk toward the small parking lot."
	},
	{
		"start":"healthcenter_c01",
		"end":"healthcenter_e01",
		"description":"Walk toward the building near the stairway."
	},
	{
		"start":"healthcenter_c01",
		"end":"healthcenter_e01",
		"description":"Walk toward the building near the stairway."
	},
	{
		"start":"superconducting_e01",
		"end":"sstreet_c01",
		"description":"Walk toward the South Street."
	},
	{
		"start":"sstreet_c01",
		"end":"superconducting_e01",
		"description":"Walk the small path that turing right."
	},


	// old south street
	{
		"start":"commuterrail_c01",
		"end":"rabbSchool_c01",
		"description":"Walk along South Street up the hill, away from the train station."
	},
	{
		"start":"rabbSchool_c01",
		"end":"commuterrail_c01",
		"description":"Continue along South Street down the hill, in the direction of the train station."
	},
	{
		"start":"rabbSchool_c01",
		"end":"rabbSchool_c02",
		"description":"Cross Old South Street, continuing up the hill along South Street."
	},
	{
		"start":"rabbSchool_c02",
		"end":"rabbSchool_c01",
		"description":"Cross Old South Street and continue down the hill along South Street towards the train station."
	},
	{
		"start":"rabbSchool_c02",
		"end":"rabbSchool_c03",
		"description":"Turn onto Old South Street and follow the road."
	},
	{
		"start":"rabbSchool_c03",
		"end":"rabbSchool_c02",
		"description":"Continue along Old South Street until it meets South Street."
	},
	{
		"start":"rabbSchool_c03",
		"end":"rabbSchool_c04",
		"description":"Continue along Old South Street towards the Rabb School."
	},
	{
		"start":"rabbSchool_c04",
		"end":"rabbSchool_c03",
		"description":"Continue along Old South Street."
	},
	{
		"start":"rabbSchool_c04",
		"end":"rabbSchool_e01",
		"description":"Turn onto the driveway, cross the small parking lot, and head to the entrance of the Rabb School."
	},
	{
		"start":"rabbSchool_e01",
		"end":"rabbSchool_c04",
		"description":"Exit and turn right, walking through the small parking lot and down the driveway."
	},
	{
		"start":"rabbSchool_c04",
		"end":"rabbSchool_c05",
		"description":"Continue along Old Street Street, in front of the Rabb School."
	},
	{
		"start":"rabbSchool_c05",
		"end":"rabbSchool_c04",
		"description":"Continue along Old South Street."
	},
	{
		"start":"rabbSchool_c05",
		"end":"rabbSchool_e01",
		"description":"Walk up the sidewalk to the main entrance of the Rabb School."
	},
	{
		"start":"rabbSchool_e01",
		"end":"rabbSchool_c05",
		"description":"Exit and walk down the sidewalk to Old South Street."
	},
	{
		"start":"rabbSchool_c05",
		"end":"rabbSchool_c06",
		"description":"Keep going along Old South Street, passing in front of the Rabb School."
	},
	{
		"start":"rabbSchool_c06",
		"end":"rabbSchool_c05",
		"description":"Keep going along Old South Street, passing in front of the Rabb School."
	},
	{
		"start":"rabbSchool_c06",
		"end":"rabbSchool_e02",
		"description":"Walk up the sidewalk to the entrance of the Rabb School."
	},
	{
		"start":"rabbSchool_e02",
		"end":"rabbSchool_c06",
		"description":"Exit and go down the sidewalk to meet Old South Street."
	},
	{
		"start":"rabbSchool_c06",
		"end":"lemberg_c01",
		"description":"Continue along Old South Street towards Lemberg."
	},
	{
		"start":"lemberg_c01",
		"end":"rabbSchool_c06",
		"description":"Walk along Old South Street towards the Rabb School."
	},
	{
		"start":"lemberg_c01",
		"end":"lemberg_c02",
		"description":"Cross Old South Street."
	},
	{
		"start":"lemberg_c02",
		"end":"lemberg_c01",
		"description":"Cross old South Street."
	},
	{
		"start":"lemberg_c01",
		"end":"lemberg_c03",
		"description":"Continue along Old South Street, towards Lemberg."
	},
	{
		"start":"lemberg_c03",
		"end":"lemberg_c01",
		"description":"Continue along Old South Street."
	},
	{
		"start":"lemberg_c03",
		"end":"lemberg_e01",
		"description":"Walk up the stairs towards Lemberg's main entrance."
	},
	{
		"start":"lemberg_e01",
		"end":"lemberg_c03",
		"description":"Exit and walk down the stairs to Old South Street."
	},
	{
		"start":"rabbSchool_c02",
		"end":"lemberg_c04",
		"description":"Walk up the hill, continuing along South Street."
	},
	{
		"start":"lemberg_c04",
		"end":"rabbSchool_c02",
		"description":"Turn left and walk downhill, towards the train station."
	},
	{
		"start":"lemberg_c04",
		"end":"lemberg_c05",
		"description":"Turn onto the small sidewalk and walk towards the small stairs."
	},
	{
		"start":"lemberg_c05",
		"end":"lemberg_c04",
		"description":"Walk along the sidewalk towards South Street."
	},
	{
		"start":"lemberg_c05",
		"end":"lemberg_c06",
		"description":"Walk down the stairs and to the driveway."
	},
	{
		"start":"lemberg_c06",
		"end":"lemberg_c05",
		"description":"Walk up the stairs towards the sidewalk next to the playground."
	},
	{
		"start":"lemberg_c06",
		"end":"lemberg_c01",
		"description":"Walk down the driveway to Old South Street."
	},
	{
		"start":"lemberg_c01",
		"end":"lemberg_c06",
		"description":"Walk up the driveway."
	},
	{
		"start":"lemberg_c06",
		"end":"lemberg_e01",
		"description":"Go down the stairs to the main entrance of Lemberg."
	},
	{
		"start":"lemberg_e01",
		"end":"lemberg_c06",
		"description":"Exit and turn right and go up the stairs."
	},
	{
		"start":"lemberg_c04",
		"end":"lemberg_c07",
		"description":"Continue along South Street, passing Lemberg on your right towards the main entrance and Squire Bridge."
	},
	{
		"start":"lemberg_c07",
		"end":"lemberg_c04",
		"description":"Continue along South Street, walking up the hill with Lemberg on your left."
	},
	{
		"start":"lemberg_c03",
		"end":"lemberg_c07",
		"description":"Continue along Old South Street, away from Lemberg on your left, until you reach South Street."
	},
	{
		"start":"lemberg_c07",
		"end":"lemberg_c03",
		"description":"Turn slightly downhill onto Old South Street, with the main entrance at your back as you enter."
	},
	{
		"start":"lemberg_c07",
		"end":"lemberg_c08",
		"description":"Cross Old South Street, heading downhill towards the bridge."
	},
	{
		"start":"lemberg_c08",
		"end":"lemberg_c07",
		"description":"Cross Old Street, heading uphill towards the train station."
	},
	{
		"start":"lemberg_c08",
		"end":"gosman_c01",
		"description":"Walk along South Street towards the bridge and Gosman, keeping the main entrance on you left."
	},
	{
		"start":"gosman_c01",
		"end":"lemberg_c08",
		"description":"Walk along South Street towards Lemberg Children's Center, keeping the main entrance on your right and the parking lot and fields on your left."
	},
	
	// south street up to main entrance
	{
		"start":"superconducting_c01",
		"end":"sstreet_c01",
		"description":"Walk along South Street towards the bridge."
	},
	{
		"start":"sstreet_c01",
		"end":"superconducting_c01",
		"description":"Walk along South Street towards the stairs beside the crosswalk."
	},
	{
		"start":"sstreet_c01",
		"end":"sstreet_c02",
		"description":"Walk along South Street towards the main entrance, passing under the bridge."
	},
	{
		"start":"sstreet_c02",
		"end":"sstreet_c01",
		"description":"Walk along South Street away from campus, passing under the bridge."
	},
	{
		"start":"sstreet_c02",
		"end":"sstreet_c03",
		"description":"Carefully cross the main entrance road towards the sign in front, staying on this side of South Street."
	},
	{
		"start":"sstreet_c03",
		"end":"sstreet_c02",
		"description":"Carefully cross the main entrance road towards the bridge, staying on this side of South Street."
	},
	{
		"start":"sstreet_c03",
		"end":"sstreet_c04",
		"description":"Walk along the sidewalk past the sign and garden."
	},
	{
		"start":"sstreet_c04",
		"end":"sstreet_c03",
		"description":"Walk along the sidewalk past the sign and garden."
	},
	{
		"start":"sstreet_c04",
		"end":"sstreet_c05",
		"description":"Carefully cross the main entrance road, heading downhill towards the train station. Stay on this side of South Street."
	},
	{
		"start":'sstreet_c05',
		"end":'sstreet_c04',
		"description":"Carefully cross the main entrance road, heading uphill. Stay on this side of South Street."
	},
	{
		"start":"sstreet_c05",
		"end":"village_c04",
		"description":"Walk downhill on the sidewalk next to South Street, heading towards the train station.."
	},
	{
		"start":"village_c04",
		"end":"sstreet_c05",
		"description":"Walk uphill on the sidewalk next to South Street, heading towards the main entrance."
	},
	{
		"start":"sstreet_c03",
		"end":'mainentrance_c01',
		"description":"Walk up the main entrance road (Old South Street) towards the information booth in front."
	},
	{
		"start":"mainentrance_c01",
		"end":"sstreet_c03",
		"description":"Walk down the sidewalk to South Street."
	},
	{
		"start":"sstreet_c04",
		"end":"mainentrance_c01",
		"description":"Walk up the main entrance road (Old South Street) towards the information booth in front."
	},
	{
		"start":"mainentrance_c01",
		"end":"sstreet_c04",
		"description":"Walk down the sidewalk to South Street."
	},
	{
		"start":"mainentrance_c01",
		"end":"mainentrance_c02",
		"description":"Cross the sidewalk."
	},
	{
		"start":"mainentrance_c02",
		"end":"mainentrance_c01",
		"description":"Cross the sidewalk to the island with the main entrance sign and gardens."
	},
	{
		"start":"mainentrance_c02",
		"end":"sstreet_c02",
		"description":"Walk down the sidewalk to South Street."
	},
	{
		"start":"sstreet_c02",
		"end":"mainentrance_c02",
		"description":"Walk up the main entrance road (Old South Street) towards the information booth in front."
	},
	{
		"start":"sstreet_c05",
		"end":"mainentrance_c03",
		"description":"Walk up the main entrance road (Old South Street) towards the information booth in front."
	},
	{
		"start":"mainentrance_c03",
		"end":"sstreet_c05",
		"description":"Walk down the sidewalk to South Street."
	},
	{
		"start":"mainentrance_c02",
		"end":"mainentrance_c04",
		"description":"Cross the sidewalk to the other side of Loop Road, next to the information booth."
	},
	{
		"start":"mainentrance_c04",
		"end":"mainentrance_c02",
		"description":"Cross the sidewalk to Old South Street."
	},
	{
		"start":"mainentrance_c03",
		"end":"mainentrance_c05",
		"description":"Cross the sidewalk."
	},
	{
		"start":"mainentrance_c05",
		"end":"mainentrance_c03",
		"description":"Cross the sidewalk."
	},
	{
		"start":"mainentrance_c04",
		"end":"info_e01",
		"description":"Head to the door of the information booth, located on this side."
	},
	{
		"start":"info_e01",
		"end":"mainentrance_c04",
		"description":"Exit the info booth and head straight for the sidewalk in front."
	},
	{
		"start":"mainentrance_c05",
		"end":"info_e01",
		"description":"Head to the door of the information booth, located on the far side."
	},
	{
		"start":"info_e01",
		"end":"mainentrance_c05",
		"description":"Exit the info booth and turn right, cutting across the front of the building to the foot of the paved path leading uphill."
	},
	
	
	
	// single points
	{
		"start":"stop_lemberg_e01",
		"end":"lemberg_c02",
		"description":"Head to the sign on a pole labelled shuttle stop."
	},
	{
		"start":"lemberg_c02",
		"end":"stop_lemberg_e01",
		"description":"Head to the crosswalk."
	}
]