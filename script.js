
const chapters = document.querySelectorAll(".chapter");

function proximo(){
    // Get the currently visible chapter
    let currentChapterIndex = chapters.findIndex(chapter => chapter.getBoundingClientRect().top <= window.innerHeight);
    
    // Check if there's a next chapter
    if (currentChapterIndex < chapters.length - 1) {
      // Get the next chapter element
      const nextChapter = chapters[currentChapterIndex + 1];
  
      // Scroll smoothly to the top of the next chapter
      nextChapter.scrollIntoView({ behavior: "smooth" });
    } else {
      chapters[0].scrollIntoView({behavior: "smooth"})
    }
}