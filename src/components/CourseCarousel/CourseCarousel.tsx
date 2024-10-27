"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseCard from "@/components/CourseCard/CourseCard";
import { CourseInfo } from "@/types/courseType";

interface CourseCarouselProps {
  courses: CourseInfo[];
}

const CourseCarousel = ({ courses }: CourseCarouselProps) => {
  const showNavigation = courses.length > 3;
  return (
    <div className="w-full max-w-full mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          containScroll: "trimSnaps",
        }}
        className="w-full  "
      >
        <CarouselContent className="-ml-1">
          {courses.map((course, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 ">
                <CourseCard initialLikes={0} facultyName={""} {...course} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {showNavigation && (
          <>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default CourseCarousel;
