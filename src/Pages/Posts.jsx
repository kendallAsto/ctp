import React from "react";
import { Suspense } from "react";

export default function Posts() {
  return (
    <Suspense fallback="Cargando publicaciones de Facebook">
        <>
        <div class="fb-page" data-href="https://www.facebook.com/santodomingo.tecnicoprofesional" data-tabs="timeline" data-width="500" data-height="1500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/santodomingo.tecnicoprofesional" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/santodomingo.tecnicoprofesional">Ctp Santo Domingo Heredia</a></blockquote></div>

        <div class="fb-page" data-href="https://www.facebook.com/santodomingo.tecnicoprofesional" data-tabs="reels" data-width="500" data-height="1500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/santodomingo.tecnicoprofesional" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/santodomingo.tecnicoprofesional">Ctp Santo Domingo Heredia</a></blockquote></div>
    </>
    </Suspense>
  );
}
