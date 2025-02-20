export default function ShowErrors ({ error, touched }: { error?: string, touched?: boolean }) {
  return (
    <>
      {
        touched && error && <span className="text-redPrimary">* {error}</span>
      }
    </>
  )
}