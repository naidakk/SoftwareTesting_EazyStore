package com.example.main;

import com.example.beans.MyService;
import com.example.beans.UserSession;
import com.example.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringMain {

    public static void main(String[] args) {

       /* var context = new AnnotationConfigApplicationContext(ProjectConfig.class);
        MyService service1 = context.getBean(MyService.class);
        MyService service2 = context.getBean(MyService.class);*/

        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);
        UserSession user1 = context.getBean(UserSession.class);
        UserSession user2 = context.getBean(UserSession.class);
        System.out.println(user1==user2); // Comparing hash code
        System.out.println(user1.getSessionId());
        System.out.println(user2.getSessionId());
    }

}
