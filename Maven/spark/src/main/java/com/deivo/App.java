package com.deivo;

import static spark.Spark.*;

import java.util.ArrayList;

import org.eclipse.jetty.util.ajax.JSON;
import org.json.JSONArray;
import org.json.JSONObject;


class Numbers{
    public ArrayList<Integer> numbers = new ArrayList<Integer>();
    
    public JSONArray all() {
        JSONArray json = new JSONArray();
        for (int i= 0; i<numbers.size(); i++){
            JSONObject obj =new JSONObject();
            obj.put("id", i);
            obj.put("value",numbers.get(i));
            json.put(obj);
            

        } return json;
    }

    public JSONObject get (int id)
    {
        JSONObject json = new JSONObject();
        json.put("id", id);
        json.put("value",numbers.get(id));
        return json;
    }

    public void add(int value){
        numbers.add(value);
        }
}


public class App {
    public static void main(String[] args) {
        Numbers numbers = new Numbers();
        get("/numeros", (req, res) -> {
            JSONObject json = new JSONObject();
            json.put("data",numbers.all());
            return json;
        });

        get("/numeros:id", (req, res) -> {
            int id = Integer.parseInt(req.params("id"));
            return numbers.get(id);
        });


        post("/numeros", (req, res )->{
            JSONObject json =new JSONObject(req.body());
            int value =json.getInt("numero");
            numbers.add(value);
            JSONObject jsonResponse = new JSONObject();
            jsonResponse.put("data", numbers.all());
            return jsonResponse;
    
        });
    }
}