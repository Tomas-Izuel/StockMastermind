import AddArticle from "@/components/providers/AddArticle";
import { getAllArticles } from "@/services/article.service";
import React from "react";

const AddArticlesPage = async ({ params }: { params: { id: string } }) => {
  const articles = await getAllArticles();
  return (
    <main className="">
      <h1>Añadir articulos a un proveedor</h1>
      <AddArticle articles={articles} id={params.id} />
    </main>
  );
};

export default AddArticlesPage;
