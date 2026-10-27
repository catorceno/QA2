package examples.gorest;

import com.intuit.karate.junit5.Karate;

class GoRestRunner {
    
    @Karate.Test
    Karate testAPI() {
        return Karate.run("users").relativeTo(getClass());
    }    

}
