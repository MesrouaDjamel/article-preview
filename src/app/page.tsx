import ArticleCard from "@/components/ArticleCard";
import Container from "@/components/Container";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-lightGrayishBlue">
      <Container>
        <ArticleCard />
      </Container>
    </main>
  );
}
