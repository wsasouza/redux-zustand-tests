import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'lucide-react'

import { Course } from '../store-zustand'
import { Module } from './components-zustand/Module'

interface ModulesContainerProps {
  tech: string
  course: Course
  isOpen: boolean
  closeSlide: () => void
}

export function ModulesContainer({
  tech,
  course,
  isOpen,
  closeSlide,
}: ModulesContainerProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="z-10" onClose={closeSlide}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-950 bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-zinc-900 py-6">
                    <div className="mb-8 border-b-2 border-emerald-600 px-0 pb-2 sm:px-0">
                      <div className="flex items-center justify-between px-4">
                        <Dialog.Title className="text-xl font-medium leading-6 text-zinc-200 ">
                          {tech}
                        </Dialog.Title>
                        <div className="ml-3 flex h-5 items-center">
                          <button
                            type="button"
                            className="rounded-lg bg-zinc-900 p-1 text-accent hover:bg-zinc-800 group"
                            onClick={closeSlide}
                          >
                            <span className="sr-only">Close panel</span>
                            <X
                              className="h-6 w-6 text-zinc-300 group-hover:text-white"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-4 flex-1 ">
                      <aside className="divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-violet-500">
                        {course &&
                          course.modules.map((module, index) => {
                            return (
                              <Module
                                key={module.id}
                                moduleIndex={index}
                                title={module.title}
                                amountOfLessons={module.lessons.length}
                              />
                            )
                          })}
                      </aside>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
