package co.zenvercoder.maps.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Tile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100, unique = true)
    private String name;

    @Column(length = 2000)
    private String imageUrl;

    @Column(length = 500)
    private String description;

    @Column(nullable = false, length = 4000)
    private String question;

    @Column(nullable = false, length = 500)
    private String answer;

    @Column//(nullable = false)
    private Date createDate;

    // this will create a foreign key column author_id
    // in the table called Tile
    @OneToOne(optional = true)
    private User author;

    // this will create a join, many tags that can go along w the tile
    @OneToMany
    private List<Tag> tags;


    // getters and setters make it so you can access them outside of the class
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }
}

