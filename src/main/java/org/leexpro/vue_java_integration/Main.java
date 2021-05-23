package org.leexpro.vue_java_integration;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import spark.Spark;
import org.slf4j.LoggerFactory;
public class Main {

    

    public static void main(String... args) {
        final Gson gson = new Gson();

        final List<Person> people = fetchPeople();

        Spark.port(4567);
        // root is 'src/main/resources', so put files in 'src/main/resources/public'
        Spark.staticFiles.location("/public");

        Spark.get("/people", (request, response) -> {
            response.type("application/json;charset=utf-8");
            return gson.toJson(people);
        });

        LoggerFactory.getLogger(Main.class).info("========== API RUNNING =================");
    }


    public static List<Person> fetchPeople() {
        List<Person> m = new ArrayList<>(); 

        m.add(new Person("Bob", "Banda", 13, "Future Accountant", "Blantyre", "Self"));
        m.add(new Person("John", "Banda", 68, "Accountant", "Blantyre", "Father"));
        m.add(new Person("Mary", "Banda", 8, "Accountant", "Blantyre", "Mother"));
        m.add(new Person("James", "Banda", 18, "Accountant", "Blantyre", "Brother"));
        m.add(new Person("Jane", "Banda", 8, "Student", "Blantyre", "Sister"));
        m.add(new Person("John", "Doe", 22, "Developer", "Lilongwe", "Cousin"));
        m.add(new Person("Brian", "Banda", 32, "Student", "Blantyre", "Best Friend"));
        m.add(new Person("Hannibal", "Kaya", 12, "Jerk", "Blantyre", "Arch Enemy"));

        return m;
    }
}
