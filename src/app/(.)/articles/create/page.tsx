import CreateArticleForm from "@/components/article/CreateArticleForm";
import { getAllFamilyCategories } from "@/services/family.service";

const CreateArticle = async () => {
  const families = await getAllFamilyCategories();
  return (
    <main className="">
      <h1>Crear articulo</h1>
      <CreateArticleForm families={families} />
    </main>
  );
};

export default CreateArticle;
