import Button from "../components/Button"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/useAuth"
import Results from "../components/Results"
import Pagination from "../components/Pagination"
import { useEffect, useState } from "react"
import type { ResourcesArray } from "../types"
import { baseUrl } from "../api/api"

const DashboardPage = () => {
  const { user } = useAuth()

  const [resources, setResources] = useState<ResourcesArray>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const resourcesPerPage = 8

  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate("/")
  }

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch(`${baseUrl}/resources/saved/`, {
          credentials: "include",
        })
        const data = await response.json()
        setResources(data)
      } catch (error) {
        console.log("Error fetching resources:", error)
      }
    }

    fetchResources()
  }, [])

  const totalPages = Math.ceil(resources.length / resourcesPerPage)

  const paginatedResources = resources.slice(
    (currentPage - 1) * resourcesPerPage,
    currentPage * resourcesPerPage
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center gap-4">
      <h1 className="mx-8 text-base font-semibold tracking-widest text-amber-500 md:mx-0 md:text-2xl">
        Welcome, {user?.email}!
      </h1>
      <div className="flex w-full justify-center px-6">
        <Button
          name="Search resources"
          onClick={handleRedirect}
          className="mb-2 bg-blue-950 px-5 py-2.5 hover:bg-blue-800 focus:ring-2 focus:ring-amber-500 focus:outline-none sm:mr-3"
        />
      </div>
      <Results resources={paginatedResources} allTags={[]} />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  )
}

export default DashboardPage
