package com.towatech.imh.dto;

public class RecipeDto {
  private int id;
  private String title;
  private String image;

  public RecipeDto() {
  }

  public int getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public String getImage() {
    return image;
  }

  public void setId(int id) {
    this.id = id;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void getImage(String image) {
     this.image = image;
  }

}
