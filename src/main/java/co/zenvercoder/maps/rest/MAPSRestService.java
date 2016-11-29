package co.zenvercoder.maps.rest;

import co.zenvercoder.maps.model.Quest;
import co.zenvercoder.maps.model.Tile;
import co.zenvercoder.maps.model.User;
import co.zenvercoder.maps.services.QuestService;
import co.zenvercoder.maps.services.TileService;
import co.zenvercoder.maps.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
public class MAPSRestService {



    @Autowired
    private QuestService questService;

    @Autowired
    private TileService tileService;

    @Autowired
    private UserService userService;

    @RequestMapping("/user")
    public @ResponseBody List<User> getAllUsers(){
        return userService.findAll();
    }

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    // used to convert your incoming Json request to Model object
    // converting from json request to java class instance
    public @ResponseBody User createUser(@RequestBody User user){
        return userService.create(user);
    }

    @RequestMapping(value = "/quest", method = RequestMethod.GET)
    public List<Quest> getAllQuest(){
        System.out.println("Get all quests...");
        return questService.findAll();
    }

    @RequestMapping(value = "/quest", method = RequestMethod.POST)
    // used to convert your incoming Json request to Model object
    public @ResponseBody Quest createQuest(@RequestBody Quest quest){

        return questService.create(quest);
    }

    @RequestMapping("/tile")
    public @ResponseBody List<Tile> getAllTiles(){
        return tileService.findAll();
    }

    @RequestMapping(value = "/tile", method = RequestMethod.POST)
    // used to convert your incoming Json request to Model object
    // converting from json request to java class instance
    public @ResponseBody Tile createTile(@RequestBody Tile tile){
        return tileService.create(tile);
    }

//    @RequestMapping(value = "/tile", method = RequestMethod.GET)
//    // used to convert your incoming Json request to Model object
//    // converting from json request to java class instance
//    // List<Tile> = return type of the method
//    // http://localhost:8080/tile?tags=javascript
//    // find returns more than one, get returns one
//    public @ResponseBody List<Tile> findTilesByTag(@RequestParam("tag") String tagname){
//        // TODO implement
//        // will return a list of tiles, not just a tile
//        return Collections.emptyList();
//    }
}
