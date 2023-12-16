package com.piramidebackend;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class PiramideControlador {
    private final PiramideRepositorio respositorio;

    PiramideControlador(PiramideRepositorio repositorio){
        this.respositorio = repositorio;
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/piramides")
    public List<Piramide> obtenerTodas() {
        return respositorio.findAll();
    }
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/piramides")
    public void SubirPiramide(@RequestBody Piramide piramide) {
        System.out.println("==== Piramide Obtenida ====");
        respositorio.save(piramide);
    }
}
