package com.dailycodebuffer.api.gateway.filter;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Predicate;

@Component
public class RouteValidator {

    private RouteValidator() {}

    public static final List<String> openApiEndpoints = List.of(
            "/user",
            "/user/",
            "/user/token",
            "/user/signIn/token",
            "/eureka"
    );

    public static final Predicate<ServerHttpRequest> isSecured =
            request -> openApiEndpoints
                    .stream()
                    .noneMatch(uri -> request.getURI().getPath().equals(uri));
}
