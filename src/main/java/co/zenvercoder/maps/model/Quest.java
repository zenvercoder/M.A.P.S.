package co.zenvercoder.maps.model;

import javax.persistence.*;

@Entity
@NamedQuery(name="Quest.findAll", query="SELECT q FROM Quest q")
public class Quest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50, unique = true)
    private String name;

    @Column(length = 200)
    private String description;

    @OneToOne
    private User author;



}



